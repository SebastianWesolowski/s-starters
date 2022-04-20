import { FC, PropsWithChildren, useEffect } from "react";

import { useFormikContext } from "formik";

import { ICallBackWrapper } from "./types";

const CallBackWrapper: FC<PropsWithChildren<ICallBackWrapper>> = ({
  setCallbackState,
  children,
}): JSX.Element => {
  const formikContext = useFormikContext();

  useEffect(() => {
    if (formikContext.submitCount > 0) {
      if (
        Object.keys(formikContext.errors).length > 0 &&
        formikContext.isSubmitting
      ) {
        setCallbackState("error");
      } else if (formikContext.isSubmitting) {
        setCallbackState("pending");
      }
    }
  }, [formikContext, setCallbackState]);

  return <>{children}</>;
};

export default CallBackWrapper;
