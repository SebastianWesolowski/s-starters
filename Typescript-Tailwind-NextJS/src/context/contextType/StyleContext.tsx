import _ from 'lodash';
import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
// import { useMediaQuery, useTheme } from '@mui/material';
// import { Theme } from '@mui/material/styles';
// import { ResponsiveStyleValue } from '@mui/system';
// import convertToNumber from 'utils/convertToNumber';
import useDimensions from 'react-cool-dimensions';

export interface IStyleContext {
  space: number;
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const defaultStyleContext: IStyleContext = {
  space: 0,
  flexDirection: 'row',
};

export const StyleContext = createContext(defaultStyleContext);

export const StyleContextWrapper: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  const returnObj = useDimensions({
    onResize: useMemo(
      () =>
        _.throttle(() => {
          // Triggered once per every 500 milliseconds
        }, 500),
      []
    ),
  });

  console.log('🚀 ~ file: StyleContext.tsx ~ line 35 ~ returnObj', returnObj);

  const { observe, currentBreakpoint } = useDimensions({
    // The "currentBreakpoint" will be the object key based on the target's width
    // for instance, 0px - 319px (currentBreakpoint = XS), 320px - 479px (currentBreakpoint = SM) and so on
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 640 },
    // Will only update the state on breakpoint changed, default is false
    updateOnBreakpointChange: true,
    onResize: () => {
      console.log('🚀 ~ file: StyleContext.tsx ~ line 45 ~ currentBreakpoint', currentBreakpoint);
      // Now the event callback will be triggered when breakpoint is changed
      // we can also access the "currentBreakpoint" here
    },
  });

  console.log('🚀 ~ file: StyleContext.tsx ~ line 45 ~ currentBreakpoint', currentBreakpoint);

  // const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.up('xs'));
  // const isLg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const [space, setSpace] = useState<number>(0);
  const [flexDirection, setFlexDirection] = useState<
    'row' | 'row-reverse' | 'column' | 'column-reverse'
  >('row');
  const value = { space, flexDirection };

  useEffect(() => {
    if (true) {
      setFlexDirection('column');
      setSpace(1);
    }
    if (true) {
      setFlexDirection('row');
      setSpace(3);
    }
  }, []);

  return (
    <div className={`card ${currentBreakpoint}`} ref={observe}>
      <div className="card-header">Im 😎</div>
      <div className="card-body">Im 👕</div>
      <div className="card-footer">Im 👟</div>
      <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
    </div>
  );
};
