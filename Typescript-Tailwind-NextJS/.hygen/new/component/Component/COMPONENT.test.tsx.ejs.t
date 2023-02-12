---
to: "<%= isTest && category === 'component' ? `${folderToSave}/${fileNamePascalCase}.test.tsx` : null %>"
---
import { render, screen } from "@testing-library/react";
import { <%= fileNamePascalCase %> } from "@<%= atomType %>s/<%= fileNamePascalCase %>/<%= fileNamePascalCase %>";

describe("Component", () => {
  describe("<%= atomType %>", () => {
    describe("<%= fileNamePascalCase %>", () => {
      describe("Render method", () => {
        it("should have h2 tag", () => {
<% if(isProps){ -%>
          render(<<%= fileNamePascalCase %> dummy='props dummy test' />);
<% } else { -%>
          render(<<%= fileNamePascalCase %> />);
<% } -%>
          const heading = screen.getByRole("heading", {
            name: /<%= fileNamePascalCase %>/,
          });

          // @ts-ignore
          expect(heading).toBeInTheDocument();
        });
      });
    });
  });
});
