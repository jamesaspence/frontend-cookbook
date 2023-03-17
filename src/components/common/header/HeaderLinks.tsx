import {clearAuth, selectToken} from '@/redux/slices/auth';
import {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import styles from './headerLinks.module.scss';
import HeaderLink from '@/components/common/header/HeaderLink';

function HeaderLinks() {
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
    <ul className={styles.headerLinks}>
      {
        token ? (
          <li>
            <div onClick={onLogout}>Logout</div>
          </li>
        ) : (
          <>
            <HeaderLink href="/login">Login</HeaderLink>
            <HeaderLink href="/register">Sign Up</HeaderLink>
          </>
        )
      }
    </ul>
  );
}

export default dynamic(() => Promise.resolve(HeaderLinks), {
  ssr: false
});