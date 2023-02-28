import {withStaticLayout} from '@/util/auth/withLayout';

export default function Home() {
  return (
    <main>
      Hello There!
    </main>
  )
}

Home.getLayout = withStaticLayout;