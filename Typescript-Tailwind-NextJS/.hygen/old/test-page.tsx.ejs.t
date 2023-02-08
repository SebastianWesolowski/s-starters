---
to: "<%= category === 'pages' ? `src/__tests__/pages/${component_name}/${component_name}.spec.tsx` : null %>"
---
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import <%= component_name %> from "@/pages/<%= lo_component_name %>";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Components", () => {
  useRouter.mockImplementationOnce(() => ({
    query: { route: "/<%= lo_component_name %>", pathname: "", query: "", asPath: "" },
  }));

  describe("<%= component_name %>", () => {
    const props = {
      dummy: "test",
    };

    const { container } = render(<<%= component_name %> {...props} />);

    it("should render without errors", () => {
      expect(container).toMatchSnapshot();
    });
  });
});
