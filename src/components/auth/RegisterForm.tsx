import {FormEvent, useState} from 'react';


export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log('register', email, firstName, lastName, password, passwordConfirm);
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
        <input type="text" name="first_name" onChange={e => setFirstName(e.target.value)} placeholder="First Name"/>
        <input type="text" name="last_name" onChange={e => setLastName(e.target.value)} placeholder="Last Name"/>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
        <input type="password" name="password_confirm" onChange={e => setPasswordConfirm(e.target.value)} placeholder="Confirm Password"/>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}