import { FC, PropsWithChildren } from 'react';

import { AppContextProvider } from '@/context/AppContextProvider';

export const AppProvider: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  return <AppContextProvider>{children}</AppContextProvider>;
};
