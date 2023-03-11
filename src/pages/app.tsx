import {WithAuthProps, withAuthRedirect} from '@/util/auth/withAuth';
import {withAppLayout} from '@/util/auth/withLayout';

export type SecureProps = WithAuthProps;

export default function App({ token }: SecureProps) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>User id: {token.sub}</p>
    </div>
  );
}

export const getServerSideProps = withAuthRedirect;