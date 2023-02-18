import {DecodedJWT} from '@/redux/slices/auth';
import {withAuth, WithAuthProps} from '@/util/auth/withAuth';

export type SecureProps = WithAuthProps;

export default function Secure({ token }: SecureProps) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>User id: {token.sub}</p>
    </div>
  );
}

export const getServerSideProps = withAuth;