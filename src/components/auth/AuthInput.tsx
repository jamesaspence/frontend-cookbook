import styles from './authInput.module.scss';
import {InputHTMLAttributes} from 'react';

type AuthInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput({ className, ...props }: AuthInputProps) {
  return (
    <input className={`${className ? `${className} ` : ''}${styles.authInput}`} {...props}/>
  );
}