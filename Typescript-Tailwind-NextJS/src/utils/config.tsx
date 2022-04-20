import {
  BsFacebook as Facebook,
  BsInstagram as Instagram,
  BsYoutube as YouTube,
} from 'react-icons/bs';

const title = 'Programista ForntEnd - Sebastian Wesołowski';
const description =
  'Jestem programistą 3 razy P. Mam ponad 6-letnie doświadczenie komercyjne, a wolny czas (którego nie mam) spędzam na medytacji w kuchennym fartuchu. W swojej karierze wcieliłem się już w rolę programisty';
const locale = 'pl';
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
  canonical: 'https://hr.wesolowski.dev',
  locale,
  openGraph: {
    type: 'website',
    locale,
    url: 'https://hr.wesolowski.dev',
    title,
    description,
    images: [
      {
        url: 'https://hr.wesolowski.dev/assets/image/openGraph.png',
        alt: title,
        width: 2240,
        height: 1260,
      },
      {
        url: 'https://hr.wesolowski.dev/assets/image/logo.png',
        alt: 'Wesolowski.dev',
        width: 300,
        height: 300,
      },
    ],
  },
};

const config = {
  SEO,
  UI,
  socialMedia: [
    {
      icon: {
        normal: <Instagram />,
        large: <Instagram size="100%" />,
      },
      name: 'Instagram',
      url: 'https://www.instagram.com/wesolowski.dev/',
    },
    {
      icon: {
        normal: <Facebook />,
        large: <Facebook size="100%" />,
      },
      name: 'Facebook',
      url: 'https://www.facebook.com/Wesolowskidev-105113151219138/',
    },
    {
      icon: {
        normal: <YouTube />,
        large: <YouTube size="100%" />,
      },
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCCQS_dsZJDN_35AL7LBiMMA',
    },
  ],
  legal: {
    privacyPolicy: {
      globalHref: 'https://hr.wesolowski.dev/privacy-policy',
      href: '/privacy-policy',
      file: '/file/polityka-prywatnosci.pdf',
      title: 'Polityka prywatności',
    },
    marketingApprovals:
      "Zgadzam się na przetwarzanie moich danych osobowych przez Sebastiana Wesołowskiego w celu realizacji usługi newsletter, a tym samym wysyłania mi informacji o produktach blogowych, usługach, promocjach lub nowościach zgodnie z <a href=''>polityką prywatności</a>. Wiem, że zgodę tę mogę w każdej chwili cofnąć. *",
  },
  hotJar: {
    hjid: 2888639,
    hjsv: 6,
  },
};

config.legal.marketingApprovals = `Zgadzam się na przetwarzanie moich danych osobowych przez Sebastiana Wesołowskiego w celu realizacji usługi newsletter, a tym samym wysyłania mi informacji o produktach blogowych, usługach, promocjach lub nowościach zgodnie z <a href='${config.legal.privacyPolicy.href}' target="_blank" rel="noopener">polityką prywatności</a>. Wiem, że zgodę tę mogę w każdej chwili cofnąć. *`;

export default config;
