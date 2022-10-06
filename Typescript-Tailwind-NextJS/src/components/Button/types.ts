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

export interface IVariantStyles {
  solid: {
    slate: string;
    yellow: string;
    white: string;
  };
  outline: {
    slate: string;
    white: string;
    yellow: string;
  };
}
