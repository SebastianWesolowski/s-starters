import { AppProps } from 'next/app';

import { AppProvider } from 'templates/AppProvider';

import 's-block/lib/main.css';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
