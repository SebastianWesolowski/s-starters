import {
  IFormSignInValues,
  initialValues,
} from "components/Forms/FormSignIn/types";
import { createContext, FC, PropsWithChildren, useState } from "react";

export interface INewsletterContext {
  isSend: boolean;
  setIsSend?: any;
  formValues: IFormSignInValues;
}

export const defaultNewsletterContext: INewsletterContext = {
  isSend: false,
  formValues: initialValues,
};

export const NewsletterContext = createContext(defaultNewsletterContext);

export const NewsletterContextWrapper: FC<PropsWithChildren<{}>> = ({
  children,
}): JSX.Element => {
  const [isSend, setIsSend] = useState<boolean>(false);
  const value = { ...defaultNewsletterContext, isSend, setIsSend };

  return (
    <NewsletterContext.Provider value={value}>
      {children}
    </NewsletterContext.Provider>
  );
};
