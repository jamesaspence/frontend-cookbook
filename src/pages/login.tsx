import AuthPageWrapper from '@/components/auth/AuthPageWrapper';
import LoginForm from '@/components/auth/LoginForm';
import {ReactNode} from 'react';

export default function Login() {
  return (
    <AuthPageWrapper>
      <LoginForm />
    </AuthPageWrapper>
  )
}

// Login.getLayout = (page: ReactNode) => page;