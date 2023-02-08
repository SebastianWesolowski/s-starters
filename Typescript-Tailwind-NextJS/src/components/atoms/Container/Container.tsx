import clsx from "clsx";
import { FC } from "react";

import { IContainerProps } from "./types";

export const Container: FC<IContainerProps> = ({ className = "", children }): JSX.Element => {
  return <div className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
};
