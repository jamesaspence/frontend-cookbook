import styles from './headerLink.module.scss';
import AppLink from '@/components/common/AppLink';
import {ReactNode} from 'react';
import { UrlObject } from 'url';

type HeaderLinkProps = {
  className?: string;
  href: string|UrlObject;
  children: ReactNode;
};

export default function HeaderLink({ className, href, children }: HeaderLinkProps) {
  return (
    <li className={`${styles.headerLink}${className ? ` ${className}`: ''}`}>
      <AppLink href={href}>{children}</AppLink>
    </li>
  );
}