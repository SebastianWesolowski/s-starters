import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

import config from "@/configs/config";
import { AppContextProvider } from "@/context/AppContextProvider";

export const AppProvider: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => (
  <ThemeProvider attribute='class' defaultTheme={config.theme}>
    <AppContextProvider>{children}</AppContextProvider>
  </ThemeProvider>
);
