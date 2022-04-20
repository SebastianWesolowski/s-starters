import { useContext } from "react";

import { NewsletterContext } from "context/contextType/NewsletterContext";
import FormSignIn from "./FormSignIn";
import ThanksCard from "./ThanksCard";

const Wrapper = (): JSX.Element | null => {
  const { isSend } = useContext(NewsletterContext);

  return (
    <div style={{ minWidth: 275, position: "relative" }}>
      <ThanksCard />
      <div
        style={{
          width: "100%",
          maxHeight: isSend ? "0px" : "3200px",
          transition: "max-height 1.15s ease-out",
          overflow: "hidden",
        }}
      >
        <FormSignIn />
      </div>
    </div>
  );
};

export default Wrapper;
