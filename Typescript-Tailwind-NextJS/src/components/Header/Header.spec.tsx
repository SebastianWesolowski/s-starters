import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { Header } from ".";

describe("Components", () => {
  describe("Header", () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
