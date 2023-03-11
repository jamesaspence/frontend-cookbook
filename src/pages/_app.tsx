import {wrapper} from '@/redux/store';
import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {ComponentType, ReactNode} from 'react';
import {NextPage} from 'next';
import AppLayout from '@/components/common/AppLayout';

type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactNode) => ReactNode
  layout?: ComponentType
}

type LayoutAppProps = AppProps & {
  Component: Page
};

export default function App({ Component, pageProps }: LayoutAppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <Provider store={store}>
      <AppLayout>
        {getLayout(<Component {...pageProps}/>)}
      </AppLayout>
    </Provider>
  );
}
