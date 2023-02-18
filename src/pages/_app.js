import {wrapper} from '../redux/store';

export function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);