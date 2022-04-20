import { useContext } from 'react';

import MinimalLogo from '@/assets/svg/MinimalLogo';
import { StyleContext } from '@/context/contextType/StyleContext';
import config from '@/utils/config';

const Header = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <>
      <div
        style={{
          padding: `${space}px`,
          backgroundColor: config.UI.theme.palette.primary.main,
          zIndex: 2,
        }}
        className={'fixed bottom-0 right-0 h-24 w-24 lg:left-0 lg:top-0'}
      >
        <MinimalLogo />
      </div>
    </>
  );
};

export default Header;
