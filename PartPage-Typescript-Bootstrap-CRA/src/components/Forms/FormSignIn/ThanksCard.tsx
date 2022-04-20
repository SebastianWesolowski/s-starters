import { useContext } from "react";

import { NewsletterContext } from "context/contextType/NewsletterContext";

const Newsletter = (): JSX.Element | null => {
  const { isSend } = useContext(NewsletterContext);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        zIndex: 2,
        position: isSend ? "relative" : "absolute",
        transition: "clip-path 1.5s 1s",
        clipPath: !isSend
          ? "circle(0 at calc(100% - 2rem) 2rem)"
          : "circle(200% at calc(100% - 2rem) 2rem)",
        pointerEvents: "all",
      }}
    >
      <h3>Thanks for sending form</h3>
      <p>
        Your registration form will be accepted after confirming by entering the
        link which will be send to You at the e-mail address provided during
        Minisymposium topic registration.
      </p>
    </div>
  );
};

export default Newsletter;
