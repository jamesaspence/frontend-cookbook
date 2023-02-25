import {wrapper} from '@/redux/store';
import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import Layout from '@/components/common/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
