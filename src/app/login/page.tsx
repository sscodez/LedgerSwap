import LoginPage from '@/components/auth/LoginPage';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Login() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (token) {
    redirect('/dashboard');
  }
  return <LoginPage />;
}
