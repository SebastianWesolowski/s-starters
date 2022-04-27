import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { Analytics } from ".";

describe("Components", () => {
  describe("Analytics", () => {
    const component = renderer.create(<Analytics />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
