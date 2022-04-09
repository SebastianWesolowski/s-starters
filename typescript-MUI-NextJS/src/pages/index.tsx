import { useContext } from 'react';

import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import { StyleContext } from 'context/contextType/StyleContext';

const Homepage = (): JSX.Element => {
  const { space } = useContext(StyleContext);

  return (
    <>
      <Container component="section" maxWidth="md" sx={{ my: { xs: 2, sm: 4 } }}>
        <Stack direction={'column'} spacing={`${space}px`}>
          <Typography component="h2">Title</Typography>
          <Typography component="p">Text</Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Homepage;
