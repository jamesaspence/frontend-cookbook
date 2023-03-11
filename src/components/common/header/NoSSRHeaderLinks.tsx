import HeaderLinks from '@/components/common/header/HeaderLinks';
import dynamic from 'next/dynamic';

const NoSsrHeaderLinks = (props: any) => (
  <HeaderLinks {...props}/>
);

export default dynamic(() => Promise.resolve(NoSsrHeaderLinks), {
  ssr: false
});