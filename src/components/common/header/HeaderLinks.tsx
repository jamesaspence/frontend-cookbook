import {clearAuth, DecodedJWT} from '@/redux/slices/auth';
import Link from 'next/link';
import {MouseEvent} from 'react';
import {Nullable} from '@/types';
import {useAppDispatch} from '@/redux/hooks';
import {useRouter} from 'next/router';

type HeaderLinksProps = {
  token: Nullable<DecodedJWT>;
};

export default function HeaderLinks({ token = null }: HeaderLinksProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onLogout = async (e: MouseEvent) => {
    e.preventDefault();

    console.log('triggering logout');
    dispatch(clearAuth());
    await router.push('/login');
  }

  return (
    <>
      <>
        {
          token ? (
            <>
              <div onClick={onLogout}>Logout</div>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Sign Up</Link>
            </>
          )
        }
      </>
    </>
  );
}