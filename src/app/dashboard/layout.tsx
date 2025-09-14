import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  // Server-side auth check to ensure dashboard is protected
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) {
    // Redirect to login with returnUrl
    redirect(`/login?returnUrl=/dashboard`);
  }
  return <DashboardLayout>{children}</DashboardLayout>;
}
