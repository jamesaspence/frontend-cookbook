import Header from '@/components/common/header/Header';
import {ReactNode} from 'react';



export default function StaticLayout({ children }: {
  children: ReactNode
}) {
  return (
    <>
      <Header token={null}/>
      {children}
    </>
  );
}