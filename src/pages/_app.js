import '../../styles/globals.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { useStore } from 'redux/store';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default MyApp;
