import { Dispatch, MouseEventHandler, SetStateAction } from "react";

import { ButtonProps } from "react-bootstrap/esm/Button";

import ButtonCallback from "./ButtonCallback";

export type TProcessState = "done" | "pending" | "error" | null;

export interface IButtonCallbackProps extends ButtonProps {
  language?: "pl" | "en";
  setCallbackState: Dispatch<SetStateAction<TProcessState>>;
  handleClick?: MouseEventHandler | undefined;
  state: TProcessState;
  type?: "submit" | "reset" | "button";
}

export default ButtonCallback;
