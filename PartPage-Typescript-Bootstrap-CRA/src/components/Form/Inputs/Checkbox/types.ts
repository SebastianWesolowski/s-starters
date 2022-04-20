import { IBasicInputProps } from "../types";
export interface ICheckboxProps extends Omit<IBasicInputProps, "label"> {
  label?: string | React.ReactElement;
}
