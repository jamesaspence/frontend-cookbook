import HeaderLinks from '@/components/common/header/HeaderLinks';

export default function Header() {

  return (
    <div className="header">
      <div className="headerLeft">
        Cookbook
      </div>
      <div className="headerRight">
        <HeaderLinks/>
      </div>
    </div>
  )
}