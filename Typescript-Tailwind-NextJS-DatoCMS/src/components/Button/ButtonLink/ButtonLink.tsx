import clsxm from "@/lib/clsxm";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import { IButtonLinkProps } from "./types";
import { baseStyles, variantStyles } from "../variants";

export const ButtonLink: FC<PropsWithChildren<IButtonLinkProps>> = ({
  variant = "solid",
  color = "slate",
  className = "",
  href,
  children,
}): JSX.Element => (
  <Link href={href}>
    <a className={clsxm(baseStyles[variant], variantStyles[variant][color], className)}>{children}</a>
  </Link>
);
