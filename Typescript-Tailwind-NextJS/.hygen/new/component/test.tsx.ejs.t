---
to: <%= absPath %>/<%= component_name %>.spec.tsx
---
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { <%= component_name %> } from ".";

describe("Components", () => {
  describe("<%= component_name %>", () => {
    const props = {
      dummy: "test",
    };

    const component = renderer.create(<<%= component_name %> {...props} />);
    const tree = component.toJSON();
 
    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
