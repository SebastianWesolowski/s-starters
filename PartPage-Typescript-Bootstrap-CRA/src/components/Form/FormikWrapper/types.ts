import { Dispatch, SetStateAction } from "react";

import { TProcessState } from "components/ButtonCallback";
import { IFormSignInValues } from "components/Forms/FormSignIn/types";

export interface IFormikWrapper {
  uniqueId: string;
  initialValues: IFormSignInValues;
  onSubmit: (value: IFormSignInValues) => void;
  setCallbackState: Dispatch<SetStateAction<TProcessState>>;
}
export interface ICallBackWrapper {
  setCallbackState: Dispatch<SetStateAction<TProcessState>>;
}
