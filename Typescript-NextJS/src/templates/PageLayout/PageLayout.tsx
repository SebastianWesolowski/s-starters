import { FC } from 'react';

// import { Box } from '@mui/material';
// import { AppConfig } from 'utils/AppConfig';
// import { SLink } from 's-block';

// import { Menu } from './Menu';
import { IProps } from './types';

// import { AppConfig } from '../utils/AppConfig';

const PageLayout: FC<IProps> = ({ menu, children }): JSX.Element => (
  <>
    {/* <SLogo logoSrc={<SvgLogoSygnet />} /> */}
    {/* <SLink path="/wp" label="test" />
     <Menu menu={menu} /> */}
    {children}
  </>
);

export default PageLayout;
