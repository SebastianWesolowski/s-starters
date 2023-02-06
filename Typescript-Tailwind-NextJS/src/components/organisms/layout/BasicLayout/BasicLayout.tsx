import { Footer, Header } from "@molecules";
import { FC, PropsWithChildren } from "react";

export const BasicLayout: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
