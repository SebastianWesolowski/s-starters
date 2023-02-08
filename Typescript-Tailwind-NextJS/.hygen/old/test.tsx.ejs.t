---
to: "<%= test && category !== 'pages' ? `${absPath}/${component_name}.spec.tsx` : null %>"
---
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { <%= component_name %> } from ".";

describe("Components", () => {
  describe("<%= component_name %>", () => {
    const props = {
      <% if(props){ -%>
      dummy: "test",
      <% } -%>
    };

    const component = renderer.create(<<%= component_name %> {...props} />);
    const tree = component.toJSON();

    it("should render without errors", () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
