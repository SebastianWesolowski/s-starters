import { FC, ReactElement, useCallback, useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import {
  BsCheckLg as Done,
  BsXCircleFill as Error,
  BsFillClockFill as CircularProgress,
} from "react-icons/bs";

import { IButtonCallbackProps } from "./index";
import { TProcessState } from "./index";

type TButtonLabeMap = {
  null: string;
  pending: string;
  done: string;
  error: string;
};
type TButtonLanguageSet = {
  pl: TButtonLabeMap;
  en: TButtonLabeMap;
};

const statusIcon = (state: TProcessState) => {
  if (state === "pending") {
    return <CircularProgress size="1.5rem" />;
  }

  if (state === "done") {
    return <Done />;
  }

  if (state === "error") {
    return <Error />;
  }

  return null;
};

const buttonLabeMap: TButtonLanguageSet = {
  pl: {
    null: "Dopisz się",
    pending: "Wysyłam...",
    done: "Zapisano poprawnie",
    error: "Wystąpił bład",
  },
  en: {
    null: "Sign up",
    pending: "Sending...",
    done: "Saved successfully",
    error: "Error",
  },
};

const ButtonCallback: FC<IButtonCallbackProps> = ({
  language = "en",
  setCallbackState,
  handleClick = undefined,
  state,
  variant = "primary",
  type = "button",
  ...props
}) => {
  const [initialState, setInitialState] = useState<TProcessState>(state);
  const [icon, setIcon] = useState<null | ReactElement>(null);
  const [buttonLabel, setButtonLabel] = useState<string>("Dopisz się");
  const [myTime, setMyTime] = useState(4);

  useEffect(() => {
    setInitialState(state);

    setIcon(statusIcon(initialState));
    const currentState =
      initialState === null ? "null" : initialState || "null";
    setButtonLabel(buttonLabeMap[language][currentState]);
    if (state === "pending") {
      setMyTime(999);
    } else {
      setMyTime(4);
    }
  }, [initialState, state]);

  const tick = useCallback((): void => {
    setMyTime(myTime - 1);
  }, [myTime]);

  useEffect(() => {
    let timerID: NodeJS.Timeout | undefined = undefined;

    if (initialState) {
      timerID = setInterval(() => {
        tick();
      }, 1000);
    }

    if (timerID === undefined) {
      return;
    }

    if (myTime <= 0) {
      clearInterval(timerID);
      setCallbackState(null);
      setIcon(statusIcon(null));
      setButtonLabel(buttonLabeMap[language].null);
      setMyTime(3);
    }

    return () => clearInterval(timerID as NodeJS.Timeout);
  }, [state, initialState, myTime, tick, setCallbackState]);

  return (
    <Button
      onClick={handleClick}
      disabled={state === "pending"}
      type={type}
      {...props}
      variant={variant}
    >
      <>
        {buttonLabel} {icon}
      </>
    </Button>
  );
};

export default ButtonCallback;
