import faviconTouchIcon from "@/assets/favicon/apple-touch-icon.png";
// eslint-disable-next-line import/order
import faviconIco from "@/assets/favicon/favicon.ico";
import favicon16x16 from "@/assets/favicon/favicon-16x16.png";
import favicon32x32 from "@/assets/favicon/favicon-32x32.png";
import safariPinnedTab from "@/assets/favicon/safari-pinned-tab.svg";
import config from "@/config/config";

import { Favicons } from "./type";
// https://realfavicongenerator.net/

/* <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
<link rel="manifest" href="/assets/favicon/site.webmanifest">
<link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="/assets/favicon/favicon.ico">
<meta name="msapplication-TileColor" content="#ffc40d">
<meta name="msapplication-config" content="/assets/favicon/browserconfig.xml">
<meta name="theme-color" content="#ffffff"> */

export const favicons: Array<Favicons> = [
  {
    key: 1,
    tag: "link",
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/assets/favicon/apple-touch-icon.png",
    staticImageData: faviconTouchIcon,
  },
  {
    key: 2,
    tag: "link",
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/assets/favicon/favicon-32x32.png",
    staticImageData: favicon32x32,
  },
  {
    key: 3,
    tag: "link",
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/assets/favicon/favicon-16x16.png",
    staticImageData: favicon16x16,
  },
  { key: 4, tag: "link", rel: "manifest", href: "/assets/favicon/site.webmanifest" },
  {
    key: 5,
    tag: "link",
    rel: "mask-icon",
    href: "/assets/favicon/safari-pinned-tab.svg",
    color: config.UI.theme.palette.primary.main,
    staticImageData: safariPinnedTab,
  },
  { key: 6, tag: "link", rel: "shortcut icon", href: "/assets/favicon/favicon.ico", staticImageData: faviconIco },
  { key: 7, tag: "meta", name: "msapplication-TileColor", content: config.UI.theme.palette.primary.main },
  { key: 8, tag: "meta", name: "msapplication-config", content: "/assets/favicon/browserconfig.xml" },
  { key: 9, tag: "meta", name: "theme-color", content: config.UI.theme.palette.primary.main },
];
