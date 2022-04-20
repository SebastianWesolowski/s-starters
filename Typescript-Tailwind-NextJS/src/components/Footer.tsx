import { SIconLink } from 's-block';

import config, { ISocialMedia } from '@/utils/config';

const Footer = (): JSX.Element => {
  return (
    <footer className="min-h-154 color-white mt-auto bg-current py-5 lg:min-h-full">
      <div className="flex-row justify-center p-4">
        {config.socialMedia.map((item: ISocialMedia) => (
          <div key={item.name} style={{ color: '#000000' }}>
            <SIconLink
              icon={item.icon.large}
              path={item.url}
              target="_blank"
              ariaLabel={item.name}
              rel="noopener"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
