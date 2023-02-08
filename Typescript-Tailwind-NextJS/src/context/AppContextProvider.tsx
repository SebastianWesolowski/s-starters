import { FC } from "react";

import { StyleContextWrapper } from "./contextType/StyleContext";

export const AppContextProvider: FC = (): JSX.Element => <StyleContextWrapper>{children}</StyleContextWrapper>;
