/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const DisplayFormikState = (props: any): JSX.Element | null => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      style={{
        fontSize: "2rem",
        margin: "1rem 0",
        padding: ".5rem",
        fontFamily: "monospace",
        background: "#f6f8fa",
        overflow: "scroll",
        width: "100%",
      }}
    >
      <pre>
        <strong>props</strong> ={JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
};

export default DisplayFormikState;
