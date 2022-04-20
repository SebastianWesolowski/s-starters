import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { ResponsiveStyleValue } from '@mui/system';

import convertToNumber from '@/utils/convertToNumber';

export interface IStyleContext {
  space: number;
  flexDirection: ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
}

export const defaultStyleContext: IStyleContext = {
  space: 0,
  flexDirection: 'row',
};

export const StyleContext = createContext(defaultStyleContext);

export const StyleContextWrapper: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.up('xs'));
  const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const [space, setSpace] = useState<number>(0);
  const [flexDirection, setFlexDirection] =
    useState<ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>>('row');
  const theme = useTheme();
  const value = { space, flexDirection };

  useEffect(() => {
    if (isXs) {
      setFlexDirection('column');
      setSpace(convertToNumber(theme.spacing(1)));
    }
    if (isLg) {
      setFlexDirection('row');
      setSpace(convertToNumber(theme.spacing(3)));
    }
  }, [isXs, isLg, theme]);

  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
};
