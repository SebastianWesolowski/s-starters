import { FC, PropsWithChildren } from "react";

import { NewsletterContextWrapper } from "./contextType/NewsletterContext";

export const AppContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}): JSX.Element => {
  return <NewsletterContextWrapper>{children}</NewsletterContextWrapper>;
};
