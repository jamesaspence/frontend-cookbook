import {ReactNode} from 'react';
import styles from './authPageWrapper.module.scss';

export default function AuthPageWrapper({ children }: { children: ReactNode }) {
  return (
    <section className={styles.authPageWrapper}>
      <div className={styles.innerWrapper}>
        {children}
      </div>
    </section>
  );
}