export interface IButtonProps {
  variant?: TButtonVariant;
  color?: TButtonColor;
  className?: string;
}

export type TButtonColor = "slate" | "white" | "yellow";
export type TButtonVariant = "solid" | "outline";

export interface IBaseStyles {
  solid: string;
  outline: string;
}
