/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-classes-per-file */
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

import config from "@/configs/config";

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
    const { dynamicImports, assetPrefix, isDevelopment, devOnlyCacheBusterQueryString } = this.context;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return dedupe(dynamicImports as any).map((bundle) => {
      if (!bundle.file.endsWith(".js") || files.allFiles.includes(bundle.file)) return null;

      return (
        <script
          defer={!isDevelopment}
          key={bundle.file}
          src={`${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          // @ts-ignore
          crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
        />
      );
    });
  }

  getScripts(files: DocumentFiles) {
    const { assetPrefix, buildManifest, isDevelopment, devOnlyCacheBusterQueryString } = this.context;

    const normalScripts = files.allFiles.filter((file) => file.endsWith(".js"));
    const lowPriorityScripts = buildManifest.lowPriorityFiles?.filter((file) => file.endsWith(".js"));

    return [...normalScripts, ...lowPriorityScripts].map((file) => (
      <script
        key={file}
        src={`${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`}
        nonce={this.props.nonce}
        defer={!isDevelopment}
        // @ts-ignore
        crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
      />
    ));
  }
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html
        className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
        lang={config.SEO.locale}
      >
        <Head />

        <body className='flex h-full flex-col'>
          <Main />
          <DeferNextScript />
          {/* <NextScript /> */}
        </body>
      </Html>
    );
  }
}
