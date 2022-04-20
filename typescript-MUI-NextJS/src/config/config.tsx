const title = 'Example.com';
const description = 'Example desc';
const locale = 'pl';
const productionURL = 'https://example.com';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';

export interface ISocialMedia {
  icon: {
    normal: JSX.Element;
    large: JSX.Element;
  };
  name: string;
  url: string;
}
const UI = {
  theme: { palette: { primary: { main: '#fac846' } } },
};
const SEO = {
  title,
  description,
  canonical: productionURL,
  locale,
  openGraph: {
    type: 'website',
    locale,
    url: productionURL,
    title,
    description,
    images: [
      {
        url: `${productionURL}/assets/image/openGraph.png`,
        alt: title,
        width: 2240,
        height: 1260,
      },
      {
        url: `${productionURL}/assets/image/logo.png`,
        alt: 'example.com',
        width: 300,
        height: 300,
      },
    ],
  },
};

let config = {
  SEO,
  UI,
  socialMedia: [
    {
      icon: {
        normal: <Instagram />,
        large: <Instagram fontSize="large" />,
      },
      name: 'Instagram',
      url: 'https://www.instagram.com/example.com/',
    },
    {
      icon: {
        normal: <Facebook />,
        large: <Facebook fontSize="large" />,
      },
      name: 'Facebook',
      url: 'https://www.facebook.com/example.com-105113151219138/',
    },
    {
      icon: {
        normal: <YouTube />,
        large: <YouTube fontSize="large" />,
      },
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCCQS_dsZJDN_35AL7LBiMMA',
    },
  ],
  hotJar: {
    hjid: 2888639,
    hjsv: 6,
  },
};

export default config;
