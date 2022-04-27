import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { Footer } from ".";

describe("Components", () => {
  describe("Footer", () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
