---
to: "<%= isTest && category === 'page' ? `${path.pages}.test/${fileNameCamelCase}.test.tsx` : null %>"
---
import { render, screen } from "@testing-library/react";

import <%= fileNamePascalCase %> from "@/pages/<%= fileNameCamelCase %>/index";

describe("<%= fileNamePascalCase %> page", () => {
  describe("Render method", () => {
    it("should have h1 tag", () => {
      render(<<%= fileNamePascalCase %> />);

      const heading = screen.getByRole("heading", {
        name: /<%= fileNamePascalCase %>/,
      });

      // @ts-ignore
      expect(heading).toBeInTheDocument();
    });
  });
});
