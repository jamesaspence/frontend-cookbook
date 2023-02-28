import HeaderLinks from '@/components/common/header/HeaderLinks';
import {Nullable} from '@/types';
import {DecodedJWT} from '@/redux/slices/auth';

type HeaderProps = {
  token: Nullable<DecodedJWT>;
}

export default function Header({ token = null }: HeaderProps) {

  return (
    <div className="header">
      <div className="headerLeft">
        Cookbook
      </div>
      <div className="headerRight">
        <HeaderLinks token={token}/>
      </div>
    </div>
  )
}