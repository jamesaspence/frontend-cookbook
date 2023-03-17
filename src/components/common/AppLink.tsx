import Link, {LinkProps} from 'next/link';
import styles from './appLink.module.scss';
import {ReactNode} from 'react';

type AppLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
}
export default function AppLink({ className, children, ...linkProps }: AppLinkProps) {
  const classes = `${className ? `${className} ` : ``}${styles.appLink}`

  return (
    <Link className={classes} {...linkProps}>{children}</Link>
  );
}
