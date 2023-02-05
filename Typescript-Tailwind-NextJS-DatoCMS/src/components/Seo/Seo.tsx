import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { renderMetaTags, SeoOrFaviconTag, TitleMetaLinkTag } from "react-datocms";

import { favicons } from "./favicons";
import configSEO from "./seoConfig/ConfigSEO";

// const defaultMeta = getMetaData(config.SEO);
// const a = new SCONFIG();
// console.log("🚀 ~ file: Seo.tsx ~ line 13 ~ SCONFIG", configSEO.getConfig());

type SeoProps = {
  metaTagsDatoCMS?: TitleMetaLinkTag[] | SeoOrFaviconTag[];
  date?: string;
  templateTitle?: string;
};

export const Seo = ({ metaTagsDatoCMS, date, templateTitle, ...props }: SeoProps): JSX.Element => {
  console.log("🚀 ~ file: Seo.tsx ~ line 18 ~ metaTagsDatoCMS", metaTagsDatoCMS);
  const router = useRouter();
  configSEO.updateRoutr(router);
  const metaTags = configSEO.getMetaTags();
  metaTags.title = templateTitle ? `${templateTitle} | ${metaTags.siteName}` : metaTags.title;

  if (date) {
    configSEO.overwriteProperty({ date });
  }
  // const openGraph = {
  //   type: meta.type,
  //   locale: meta.locale,
  //   url: meta.url,
  //   title: meta.title,
  //   description: meta.description,
  //   site_name: meta.title,
  //   images: [
  //     {
  //       url: meta.image.first,
  //       alt: meta.title,
  //       width: 2240,
  //       height: 1260,
  //     },
  //     {
  //       url: meta.image.second,
  //       alt: meta.title,
  //       width: 300,
  //       height: 300,
  //     },
  //   ],
  // };

  // const getNextSeoConfig = { ...defaultMeta, openGraph };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1,viewport-fit=cover' />
        <meta name='keywords' content={metaTags.keywords} />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
        {/* <meta name='title' content={metaTags.title} /> */}
        <meta name='twitter:alt' content={metaTags.title} />
        {metaTags.date && (
          <>
            <meta property='article:published_time' content={metaTags.date} />
            <meta name='publish_date' property='og:publish_date' content={metaTags.date} />
            <meta name='author' property='article:author' content='Theodorus Clarence' />
          </>
        )}

        {/* Favicons */}
        {favicons.map((linkProps) => {
          if (linkProps.tag === "link") {
            return (
              <link
                key={linkProps.key}
                rel={linkProps.rel}
                sizes={linkProps.sizes}
                href={linkProps.staticImageData ? linkProps.staticImageData.src : linkProps.href}
                type={linkProps.type}
                color={linkProps.color}
              />
            );
          }
          return <meta key={linkProps.key} name={linkProps.name} content={linkProps.content} />;
        })}
        {metaTagsDatoCMS && renderMetaTags(metaTagsDatoCMS)}
      </Head>
      <NextSeo {...configSEO.getNextSeoConfig()} />
    </>
  );
};
