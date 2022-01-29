import { ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
import theme from 'styles/theme';
import client from 'apollo/client';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@mui/material';

export const AppProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  );
};
