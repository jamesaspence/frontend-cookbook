import {withAuth, WithAuthProps} from '@/util/auth/withAuth';
import {withAppLayout} from '@/util/auth/withLayout';

export type SecureProps = WithAuthProps;

export default function Secure({ token }: SecureProps) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>User id: {token.sub}</p>
    </div>
  );
}

Secure.getLayout = withAppLayout;

export const getServerSideProps = withAuth;