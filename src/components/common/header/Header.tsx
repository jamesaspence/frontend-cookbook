import Link from 'next/link';
import HeaderLinks from '@/components/common/header/HeaderLinks';

export default function Header() {

  return (
    <div className="header">
      <div className="headerLeft">
        <Link href="/">
          Cookbook
        </Link>
      </div>
      <div className="headerRight">
        <HeaderLinks/>
      </div>
    </div>
  );
}