import clsxm from "@/lib/clsxm";
import { FC, PropsWithChildren } from "react";

import { IContainerProps } from "./types";

export const Container: FC<PropsWithChildren<IContainerProps>> = ({ className = "", children }): JSX.Element => (
  <div className={clsxm("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);
