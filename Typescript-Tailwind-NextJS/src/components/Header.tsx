import { useContext } from 'react';
import { SLogo } from 's-block';

import MinimalLogo from '@/assets/svg/MinimalLogo';
import { StyleContext } from '@/context/contextType/StyleContext';

const Header = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <>
      <div
        style={{
          padding: `${space}px`,
          backgroundColor: 'primary.main',
          zIndex: 2,
        }}
        className={'lg:bottom-initial lg:right-initial fixed bottom-0 right-0 lg:left-0 lg:top-0'}
      >
        <SLogo logoAssets={{ logo: <MinimalLogo /> }} height={'47px'} />
      </div>
    </>
  );
};

export default Header;
