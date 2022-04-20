import '../styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import config from '@/config/config';
import { AppProvider } from '@/templates/AppProvider';
import { GlobalContainer } from '@/templates/GlobalContainer';

import { AppProps } from '../../types/types';
import createEmotionCache from '../styles/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{config.SEO.title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...config.SEO} />
      <AppProvider>
        <GlobalContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </GlobalContainer>
      </AppProvider>
    </CacheProvider>
  );
};

export default MyApp;
