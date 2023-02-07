import { render, screen } from "@testing-library/react";

import Wesolowski from "@/pages/wesolowski/index";

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe("Wesolowski page", () => {
  describe("Render method", () => {
    it("should have h1 tag", () => {
      render(<Wesolowski />);

      const heading = screen.getByRole("heading", {
        name: /Wesolowski/,
      });

      // @ts-ignore
      expect(heading).toBeInTheDocument();
    });
  });
});
