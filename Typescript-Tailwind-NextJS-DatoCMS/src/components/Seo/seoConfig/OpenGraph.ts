import BasicSeo from "./BasicSeo";

class OpenGraph extends BasicSeo {
  public configOpenGraph = {
    openGraph: {
      type: this.seo.type,
      locale: this.seo.locale,
      url: this.seo.url,
      title: this.seo.title,
      description: this.seo.description,
      site_name: this.seo.title,
      images: [
        {
          url: this.seo.image.first,
          alt: this.seo.title,
          width: 2240,
          height: 1260,
        },
        {
          url: this.seo.image.second,
          alt: this.seo.title,
          width: 300,
          height: 300,
        },
      ],
    },
  };
}

export default OpenGraph;
