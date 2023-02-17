import Image from 'next/image'
import { Inter } from '@next/font/google'
import AuthForm from '@/components/auth/AuthForm';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <AuthForm/>
    </main>
  )
}
