import Header from '@/components/common/header/Header';
import {ReactNode} from 'react';
import styles from './appLayout.module.scss';

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <section className={styles.container}>
      <Header/>
      {children}
    </section>
  )
}