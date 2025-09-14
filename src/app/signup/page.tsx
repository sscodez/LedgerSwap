import SignupPage from '@/components/auth/SignupPage';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Signup() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (token) {
    redirect('/dashboard');
  }
  return <SignupPage />;
}
