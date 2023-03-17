import HeaderLinks from '@/components/common/header/HeaderLinks';
import styles from './header.module.scss';
import AppLink from '@/components/common/AppLink';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <AppLink href="/" className={styles.headerLink}>
          <h1>Cookbook</h1>
        </AppLink>
      </div>
      <div className={styles.headerRight}>
        <HeaderLinks/>
      </div>
    </div>
  );
}