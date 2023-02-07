import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { IExampleProps } from "./types";

export const Example: FC<PropsWithChildren<IExampleProps>> = ({ className = "", children }): JSX.Element => (
  <div className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);
