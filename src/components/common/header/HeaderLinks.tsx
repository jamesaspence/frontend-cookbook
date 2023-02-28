'use client';

import {DecodedJWT} from '@/redux/slices/auth';
import Link from 'next/link';
import {MouseEvent} from 'react';
import {Nullable} from '@/types';

type HeaderLinksProps = {
  token: Nullable<DecodedJWT>;
};

export default function HeaderLinks({ token = null }: HeaderLinksProps) {
  const onLogout = (e: MouseEvent) => {
    e.preventDefault();

    console.log('triggering logout');
    // TODO fire clear auth
    // TODO redirect to login page
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