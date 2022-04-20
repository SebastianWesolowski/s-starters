import { FC } from "react";

import { ITextErrorProps } from "./index";

const TextError: FC<ITextErrorProps> = ({ children = null }) => (
  <>
    <div
      className="MuiFormHelperText-root MuiFormHelperText-sizeMedium MuiFormHelperText-contained Mui-required"
      style={{ margin: "8px 0" }}
    >
      <p>
        <strong>{children}</strong>
      </p>
    </div>
  </>
);

export default TextError;
