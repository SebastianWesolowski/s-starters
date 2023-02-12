import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

import s from "../variants.module.scss";

import { IButtonProps } from "../types";

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  variant = "solid",
  color = "slate",
  className = "",
  children,
}): JSX.Element => {
  const classButton = classNames([
    s.baseStyles,
    s["baseStyles-text"],
    s[`variantStyles-${variant}`],
    s[`colorStyles-${color}`],
    className,
  ]);

  return <button className={classButton}>{children}</button>;
};
