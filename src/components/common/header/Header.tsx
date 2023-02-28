import HeaderLinks from '@/components/common/header/HeaderLinks';
import {Nullable} from '@/types';
import {DecodedJWT} from '@/redux/slices/auth';
import Link from 'next/link';

type HeaderProps = {
  token: Nullable<DecodedJWT>;
}

export default function Header({ token = null }: HeaderProps) {

  return (
    <div className="header">
      <div className="headerLeft">
        <Link href="/">
          Cookbook
        </Link>
      </div>
      <div className="headerRight">
        <HeaderLinks token={token}/>
      </div>
    </div>
  )
}