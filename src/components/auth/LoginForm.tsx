'use client';

import {FormEvent, useState} from 'react';
import {useLoginUserMutation} from '@/redux/services/cookbookApi';
import {useAppDispatch} from '@/redux/hooks';
import {setToken, setUser} from '@/redux/slices/auth';
import {useRouter} from 'next/router';
import {routes} from '@/util/routes';
import AuthForm from '@/components/auth/AuthForm';
import AuthInput from '@/components/auth/AuthInput';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log('login', email, password);
    try {
      const data = await login({email, password}).unwrap();
      dispatch(setToken(data.token));
      dispatch(setUser(data));
      await router.push(routes.home);
      console.log('data', data);
    } catch (err) {
      console.error('login failure', err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={onSubmit}>
        <AuthInput type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
        <AuthInput type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit">Login</button>
      </AuthForm>
    </div>
  );
}