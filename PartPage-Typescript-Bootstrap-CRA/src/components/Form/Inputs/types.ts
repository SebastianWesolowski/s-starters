import { AnyObject } from "yup/lib/types";

export interface IBasicInputProps {
  helperText?: string;
  placeholder?: string;
  defaultValue?: string | number;
  name: string;
  label?: string;
  validate: { [key: string]: AnyObject };
}
