import { FC, PropsWithChildren } from "react";

export const GlobalContainer: FC<PropsWithChildren<{}>> = ({
  children,
}): JSX.Element => {
  return <div className="globalContainer">{children}</div>;
};
