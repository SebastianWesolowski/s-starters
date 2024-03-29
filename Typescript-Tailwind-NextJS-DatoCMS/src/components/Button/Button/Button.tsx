import clsxm from "@/lib/clsxm";
import { FC, PropsWithChildren } from "react";

import { IButtonProps } from "../types";
import { baseStyles, variantStyles } from "../variants";

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  variant = "solid",
  color = "slate",
  className = "",
  children,
}): JSX.Element => (
  <button className={clsxm(baseStyles[variant], variantStyles[variant][color], className)}>{children}</button>
);
