import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

import config from '@/utils/config';

const HotJar = (): null | JSX.Element => {
  useEffect(() => {
    hotjar.initialize(config.hotJar.hjid, config.hotJar.hjsv);
  }, []);

  return null;
};

export default HotJar;
