import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { AppProvider } from ".";

describe("Components", () => {
  describe("AppProvider", () => {
    const component = renderer.create(<AppProvider />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
