import classNames from "classnames";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import s from "@atoms/Button/variants.module.scss";

import { IButtonLinkProps } from "./types";

export const ButtonLink: FC<PropsWithChildren<IButtonLinkProps>> = ({
  variant = "solid",
  color = "slate",
  className = "",
  href,
  children,
}): JSX.Element => {
  const classButton = classNames([
    s.baseStyles,
    s["baseStyles-text"],
    s[`variantStyles-${variant}`],
    s[`colorStyles-${color}`],
    className,
  ]);

  return (
    <Link href={href} className={classButton}>
      {children}
    </Link>
  );
};
