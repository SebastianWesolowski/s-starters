import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { BasicLayout } from ".";

describe("Components", () => {
  describe("BasicLayout", () => {
    const component = renderer.create(<BasicLayout />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
