import { FC, PropsWithChildren } from 'react';

export const GlobalContainer: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};
