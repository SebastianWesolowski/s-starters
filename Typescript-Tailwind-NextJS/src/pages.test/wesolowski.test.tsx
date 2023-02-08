import { render, screen } from "@testing-library/react";

import Wesolowski from "@/pages/wesolowski/index";

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
