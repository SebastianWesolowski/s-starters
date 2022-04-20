import { useMemo } from "react";
import { ITextCounterProps } from "./types";

const TextCounter = ({
  countText,
  validate,
  name,
}: ITextCounterProps): JSX.Element => {
  const maxCharacter = useMemo(() => {
    if (validate[name]?.exclusiveTests.max === true) {
      const description = validate[name]?.describe();
      const maxTest = description.tests.find((t: any) => t.name === "max");
      return maxTest.params.max;
    }
    return 2000;
  }, [validate, name]);

  const charactersLeft = useMemo(() => {
    return String(maxCharacter - countText);
  }, [countText, maxCharacter]);

  return (
    <p className="w-100 text-black-50 text-xl-end aos-init aos-animate m-0">
      characters left: {charactersLeft}
    </p>
  );
};

export default TextCounter;
