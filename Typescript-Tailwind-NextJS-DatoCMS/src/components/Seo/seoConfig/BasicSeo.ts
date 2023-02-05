import config from "@/config/config";

class BasicSeo {
  static config: unknown;

  public seo = {
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/assets/favicon/favicon.ico",
      },
    ],
    title: config.basic.title,
    url: config.basic.url.production,
    siteName: config.basic.title,
    description: config.basic.description,
    canonical: config.basic.url.production,
    locale: config.basic.locale,
    date: "",
    keywords:
      "Learn React, React Workshops, Testing JavaScript Training, React Training, Learn JavaScript, Learn TypeScript",
    twitter: {
      site: "@wesolowski",
      cardType: "summary_large_image",
    },
    type: "website",
    robots: "follow, index",
    image: {
      first: "https://hr.wesolowski.dev/assets/image/openGraph.png",
      second: "https://hr.wesolowski.dev/assets/image/openGraph.png",
    },
  };
}

export default BasicSeo;
