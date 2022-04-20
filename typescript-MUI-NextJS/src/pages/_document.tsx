import * as React from 'react';

import { EmotionCache } from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import config from '@/config/config';

import createEmotionCache from '../styles/createEmotionCache';
import theme from '../styles/theme';

function dedupe<T extends { file: string }>(bundles: T[]): T[] {
  const files = new Set<string>();
  const kept: T[] = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}

type DocumentFiles = {
  sharedFiles: readonly string[];
  pageFiles: readonly string[];
  allFiles: readonly string[];
};

class DeferNextScript extends NextScript {
  getDynamicChunks(files: DocumentFiles) {
    const { dynamicImports, assetPrefix, isDevelopment, devOnlyCacheBusterQueryString } =
      this.context;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return dedupe(dynamicImports as any).map((bundle) => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;

      return (
        <script
          defer={!isDevelopment}
          key={bundle.file}
          src={`${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
        />
      );
    });
  }

  getScripts(files: DocumentFiles) {
    const { assetPrefix, buildManifest, isDevelopment, devOnlyCacheBusterQueryString } =
      this.context;

    const normalScripts = files.allFiles.filter((file) => file.endsWith('.js'));
    const lowPriorityScripts = buildManifest.lowPriorityFiles?.filter((file) =>
      file.endsWith('.js')
    );

    return [...normalScripts, ...lowPriorityScripts].map((file) => {
      return (
        <script
          key={file}
          src={`${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          defer={!isDevelopment}
          crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
        />
      );
    });
  }
}

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={config.SEO.locale}>
        <Head>
          <meta name="description" content={config.SEO.description} />

          <link rel="icon" href="/assets/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-icon-76x76.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/favicon/android-icon-192x192.png   "
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon-16x16.png"
          />

          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
          <meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache: EmotionCache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
