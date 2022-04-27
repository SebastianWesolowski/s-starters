import { FC, PropsWithChildren } from "react";

import { Footer, Header } from "@/components";

export const BasicLayout: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
