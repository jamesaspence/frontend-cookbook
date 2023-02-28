import AuthForm from '@/components/auth/AuthForm';
import {withStaticLayout} from '@/util/auth/withLayout';

export default function Login() {
  return (
    <main>
      <AuthForm/>
    </main>
  )
}

Login.getLayout = withStaticLayout;