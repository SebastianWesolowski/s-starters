import { useContext } from 'react';

import { Box } from '@mui/material';
import { SLogo } from 's-block';

import MinimalLogo from '@/assets/svg/MinimalLogo';
import { StyleContext } from '@/context/contextType/StyleContext';

const Header = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          padding: `${space}px`,
          backgroundColor: 'primary.main',
          zIndex: 2,
          bottom: { xs: '0', lg: 'initial' },
          right: { xs: '0', lg: 'initial' },
          top: { xs: 'initial', lg: '0' },
          left: { xs: 'initial', lg: '0' },
        }}
      >
        <SLogo logoAssets={{ logo: <MinimalLogo /> }} height={'47px'} />
      </Box>
    </>
  );
};

export default Header;
