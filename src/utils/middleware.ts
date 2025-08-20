// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   // You can handle redirects here
//   // Example: redirect HTTP to HTTPS
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-ledgerswap-middleware', 'true');

//   // Example: Redirect specific paths
//   if (request.nextUrl.pathname === '/old-path') {
//     return NextResponse.redirect(new URL('/new-path', request.url));
//   }

//   // Example: Add security headers
//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });

//   // Add security headers
//   response.headers.set('X-Frame-Options', 'DENY');
//   response.headers.set('X-Content-Type-Options', 'nosniff');
//   response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
//   response.headers.set(
//     'Content-Security-Policy',
//     "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;"
//   );

//   return response;
// }

// // Specify which paths this middleware will run on
// export const config = {
//   matcher: [
//     // Skip all internal paths (_next, api, etc)
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// };
