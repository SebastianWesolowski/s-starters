import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SIconLink } from 's-block';

import config, { ISocialMedia } from '../../config';

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: 'primary.main',
        color: 'common.white',
        marginTop: 'auto',
        minHeight: { xs: '154px', lg: 'initial' },
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={4}>
        {config.socialMedia.map((item: ISocialMedia) => (
          <Box key={item.name} sx={{ color: 'common.black' }}>
            <SIconLink
              icon={item.icon.large}
              path={item.url}
              target="_blank"
              ariaLabel={item.name}
              rel="noopener"
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Footer;
