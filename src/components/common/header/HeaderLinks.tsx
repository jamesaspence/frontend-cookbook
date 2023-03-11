import {clearAuth, selectToken} from '@/redux/slices/auth';
import Link from 'next/link';
import {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {useRouter} from 'next/router';

export default function HeaderLinks() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const token = useAppSelector(selectToken);

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