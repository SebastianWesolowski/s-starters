import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import useDimensions from "react-cool-dimensions";

import clsxm from "@/lib/clsxm";

import { IStyleContext, TBreakpoints } from "./types";

export const defaultStyleContext: IStyleContext = {
  space: 0,
  flexDirection: "row",
  breakpoint: "XS",
};

export const StyleContext = createContext(defaultStyleContext);

export const StyleContextWrapper: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
  const [space, setSpace] = useState<number>(0);
  const [breakpoint, setBreakpoint] = useState<TBreakpoints>("XS");
  const [flexDirection, setFlexDirection] = useState<"row" | "row-reverse" | "column" | "column-reverse">("row");

  const { currentBreakpoint, observe } = useDimensions({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 640 },
    updateOnBreakpointChange: true,
    onResize: () => {
      setBreakpoint(currentBreakpoint as TBreakpoints);
    },
  });

  const value = { space, flexDirection, breakpoint };

  useEffect(() => {
    setFlexDirection("column");
    setSpace(1);

    setFlexDirection("row");
    setSpace(3);
  }, []);

  return (
    <div ref={observe} className={clsxm("flex min-h-screen flex-col", currentBreakpoint)}>
      <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
    </div>
  );
};
