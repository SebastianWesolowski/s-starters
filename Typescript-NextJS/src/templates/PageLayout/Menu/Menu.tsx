import { title } from 'process';

import { FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Link as MUILink, Toolbar, Button, Typography, IconButton } from '@mui/material';
import isEmpty from 'lodash/isEmpty';

import { IProps } from './types';

export const Menu: FC<IProps> = ({ menu }): JSX.Element | null => {
  if (isEmpty(menu)) {
    return null;
  }

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {menu.map(({ node: { id, label, url } }) => {
          return (
            <MUILink
              color="inherit"
              key={id}
              noWrap
              variant="body2"
              href={url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {label}
            </MUILink>
          );
        })}
      </Toolbar>
    </>
  );
};
