import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lightweight JWT payload decode (no signature verification), Edge-safe (uses atob)
function decodeJwtPayload<T = any>(token: string): T | null {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
    // atob is available in Edge runtime
    const json = atob(padded);
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}

function isValidJwt(token?: string | null): { valid: boolean; payload?: any } {
  if (!token) return { valid: false };
  const payload = decodeJwtPayload<any>(token);
  if (!payload) return { valid: false };
  // If exp is present, ensure it is in the future (exp in seconds)
  if (typeof payload.exp === 'number') {
    const nowSec = Math.floor(Date.now() / 1000);
    if (payload.exp <= nowSec) {
      return { valid: false };
    }
  }
  return { valid: true, payload };
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  // Cookie name: 'token' (set by LoginPage client after sign-in)
  const token = req.cookies.get('token')?.value;
  const { valid: hasValidToken, payload } = isValidJwt(token);
  const isDev = process.env.NODE_ENV !== 'production';

  // Skip static and Next internals quickly
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.json')
  ) {
    return NextResponse.next();
  }

  // If user is already logged in, prevent visiting login/signup
  if (hasValidToken && (pathname === '/login' || pathname === '/signup')) {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // Routes that require authentication (dashboard and admin)
  const requiresAuth =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/exchange') ||
    pathname.startsWith('/profile') ||
    pathname.startsWith('/settings') ||
    pathname.startsWith('/admin');

  if (requiresAuth && !hasValidToken) {
    // redirect to login with returnUrl
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    const returnUrl = pathname + (search || '');
    url.searchParams.set('returnUrl', returnUrl);
    const res = NextResponse.redirect(url);
    // If an invalid/expired token cookie exists, clear it
    if (token && !hasValidToken) {
      res.cookies.set('token', '', { maxAge: 0, path: '/' });
    }
    return res;
  }

  // Admin gating: require role=admin in JWT payload
  if (pathname.startsWith('/admin')) {
    let isAdmin = false;
    if (hasValidToken && payload) {
      if ((payload as any)?.role === 'admin') isAdmin = true;
    }
    if (!isAdmin) {
      const url = req.nextUrl.clone();
      url.pathname = '/dashboard';
      const res = NextResponse.redirect(url);
      if (token && !hasValidToken) {
        res.cookies.set('token', '', { maxAge: 0, path: '/' });
      }
      return res;
    }
  }

  // Otherwise proceed
  const res = NextResponse.next();
  if (isDev) {
    // Attach debug headers you can see in the browser Network panel
    res.headers.set('x-debug-path', pathname);
    res.headers.set('x-debug-token-present', token ? 'true' : 'false');
    res.headers.set('x-debug-token-valid', hasValidToken ? 'true' : 'false');
  }
  return res;
}

// Adjust matchers for routes you want middleware to run on
export const config = {
  matcher: [
    // Run on all routes and let the logic above allow public routes
    '/:path*',
  ],
};