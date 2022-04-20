import { FC, PropsWithChildren } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { AppContextProvider } from '@/context/AppContextProvider';

import theme from '../styles/theme';

export const AppProvider: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>{children}</AppContextProvider>
    </ThemeProvider>
  );
};
