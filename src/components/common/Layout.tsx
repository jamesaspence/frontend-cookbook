import Header from '@/components/common/header/Header';
import {ReactNode} from 'react';

export default function Layout({ children }: {
  children: ReactNode
}) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}