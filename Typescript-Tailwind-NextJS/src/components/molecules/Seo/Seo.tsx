import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import config from "@/configs/config";

import { favicons } from "./favicons";

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: config.SEO.title,
  siteName: config.SEO.siteName,
  description: config.SEO.description,
  url: config.url.production,
  type: config.SEO.type,
  robots: config.SEO.robots,
  image: config.SEO.image,
  locale: config.SEO.locale,
  canonical: config.url.production,
  keywords: config.SEO.keywords,
  additionalLinkTags: config.SEO.additionalLinkTags,
  twitter: config.SEO.twitter,
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export const Seo = ({ ...props }: SeoProps): JSX.Element => {
  const router = useRouter();
  const currentUrl = `${config.url.production}${router.asPath}`;
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta.canonical = currentUrl;
  meta.title = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  const openGraph = {
    type: meta.type,
    locale: meta.locale,
    url: meta.url,
    title: meta.title,
    description: meta.description,
    site_name: meta.title,
    images: [
      {
        url: meta.image.first,
        alt: meta.title,
        width: 2240,
        height: 1260,
      },
      {
        url: meta.image.second,
        alt: meta.title,
        width: 300,
        height: 300,
      },
    ],
  };

  defaultMeta.title = meta.title;

  const nextSeoConfig = { ...defaultMeta, openGraph };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1,viewport-fit=cover' />
        <meta name='keywords' content={meta.keywords} />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
        <meta name='title' content={meta.title} />
        <meta name='twitter:alt' content={meta.title} />
        {meta.date && (
          <>
            <meta property='article:published_time' content={meta.date} />
            <meta name='publish_date' property='og:publish_date' content={meta.date} />
            <meta name='author' property='article:author' content='Theodorus Clarence' />
          </>
        )}
        <title>meta.title</title>

        {/* Favicons */}
        {favicons.map((linkProps) => {
          if (linkProps.tag === "link") {
            return (
              <link
                key={linkProps.key}
                rel={linkProps.rel}
                sizes={linkProps.sizes}
                href={linkProps.href}
                type={linkProps.type}
                color={linkProps.color}
              />
            );
          }
          return <meta key={linkProps.key} name={linkProps.name} content={linkProps.content} />;
        })}
      </Head>
      <NextSeo {...nextSeoConfig} />
    </>
  );
};
