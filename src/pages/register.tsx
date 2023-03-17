import AuthPageWrapper from '@/components/auth/AuthPageWrapper';
import RegisterForm from '@/components/auth/RegisterForm';
import {ReactNode} from 'react';

export default function Register() {
  return (
    <AuthPageWrapper>
      <RegisterForm/>
    </AuthPageWrapper>
  )
}

// Register.getLayout = (page: ReactNode) => page;