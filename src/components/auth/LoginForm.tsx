'use client';

import {ChangeEvent, FormEvent, useState} from 'react';
import {useLoginUserMutation} from '@/redux/services/cookbookApi';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginUserMutation();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log('login', email, password);
    const status = await login({email, password});

    console.log(status);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}