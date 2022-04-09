import { FC, PropsWithChildren } from 'react';

import { Box } from '@mui/system';

export const GlobalContainer: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
};
