import { AnyObject } from "yup/lib/types";

export interface ITextCounterProps {
  countText: number;
  validate: { [key: string]: AnyObject };
  name: string;
}
