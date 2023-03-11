import {Nullable} from '@/types';
import {DecodedJWT} from '@/redux/slices/auth';
import Link from 'next/link';
import NoSSRHeaderLinks from '@/components/common/header/NoSSRHeaderLinks';

type HeaderProps = {
}

export default function Header() {

  return (
    <div className="header">
      <div className="headerLeft">
        <Link href="/">
          Cookbook
        </Link>
      </div>
      <div className="headerRight">
        <NoSSRHeaderLinks/>
      </div>
    </div>
  );
}