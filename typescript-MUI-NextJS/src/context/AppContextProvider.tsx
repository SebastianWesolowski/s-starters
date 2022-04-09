import React, { FC, PropsWithChildren } from 'react';

import { StyleContextWrapper } from './contextType/StyleContext';

export const AppContextProvider: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  return <StyleContextWrapper>{children}</StyleContextWrapper>;
};
