import { useContext } from 'react';

import { StyleContext } from '@/context/contextType/StyleContext';

const Homepage = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <div className="container mx-auto my-2 sm:my-4">
      <div className={'flex'} style={{ paddingBottom: `${space}px` }}>
        <h2 className="text-xl">Title</h2>
        <p className="text-base">Text</p>
      </div>
    </div>
  );
};

export default Homepage;
