import { ReactNode } from "react";
import { IBasicInputProps } from "../types";

export interface ITextFieldProps extends IBasicInputProps {
  type: "text" | "password" | "email" | "number" | "tel";
  defaultValue?: string;
  lowerCase?: boolean;
  icon?: ReactNode | undefined;
}
