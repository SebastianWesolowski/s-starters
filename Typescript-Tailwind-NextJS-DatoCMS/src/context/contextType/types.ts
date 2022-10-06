export type TBreakpoints = "XS" | "SM" | "MD" | "LG" | "XL";
export interface IStyleContext {
  space: number;
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  breakpoint: TBreakpoints;
}
