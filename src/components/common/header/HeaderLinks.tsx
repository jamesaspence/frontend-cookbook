'use client';

import {Nullable} from '@/types';
import {DecodedJWT, selectToken} from '@/redux/slices/auth';
import Link from 'next/link';
import {MouseEvent, useEffect} from 'react';
import {useSelector} from 'react-redux';

export default function HeaderLinks() {
  const token = useSelector(selectToken);

  useEffect(() => {}, [ token ]);
  const onLogout = (e: MouseEvent) => {
    e.preventDefault();

    console.log('triggering logout');
    // TODO fire clear auth
    // TODO redirect to login page
  }

  return (
    <>
      <>
        <Link href="/login">Login</Link>
        <Link href="/register">Sign Up</Link>
      </>
    </>
  );
}