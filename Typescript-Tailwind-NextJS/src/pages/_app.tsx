import { AppProps } from "next/app";

import { AppProvider } from "@/layout";
import { Analytics } from "@/utils";

import "@/styles/global.css";
import "@/styles/prism-a11y-dark.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";

// Client-side cache, shared for the whole session of the user in the browser.

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const AnyComponent = Component as any;
  return (
    <>
      <AppProvider>
        <Analytics />
        <AnyComponent {...pageProps} />
      </AppProvider>
    </>
  );
};

export default MyApp;
