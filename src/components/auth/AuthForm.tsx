import {FormEventHandler, ReactNode} from 'react';
import styles from './authForm.module.scss';

type AuthFormProps = {
  onSubmit: FormEventHandler;
  children: ReactNode;
};

export default function AuthForm({ children, onSubmit }: AuthFormProps) {
  return (
    <form className={styles.authForm} onSubmit={onSubmit}>
      {children}
    </form>
  )
}