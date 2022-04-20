import { IBasicInputProps } from "../types";
export interface ISelectProps extends IBasicInputProps {
  options: IOptionsObject[];
}

export interface IOptionsObject {
  value: string | number;
  label: string;
}
