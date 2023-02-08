import { FC } from "react";

import config from "@/configs/config";

import GoogleAnalytics from "./components/GoogleAnalytics";
import HotJar from "./components/HotJar";
import Umami from "./components/Umami";

const isProduction = process.env.NODE_ENV === "production";

export const Analytics: FC = (): JSX.Element => (
  <>
    {isProduction && config.analytics.umamiWebsiteId && <Umami />}
    {isProduction && config.analytics.googleAnalyticsId && <GoogleAnalytics />}
    {isProduction && config.analytics.hjid && <HotJar />}
  </>
);
