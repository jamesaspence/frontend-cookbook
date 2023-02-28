import Header from '@/components/common/header/Header';
import {ReactNode} from 'react';
import {useAppSelector} from '@/redux/hooks';
import {selectToken} from '@/redux/slices/auth';

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  const token = useAppSelector(selectToken);

  return (
    <>
      <Header token={token}/>
      {children}
    </>
  )
}