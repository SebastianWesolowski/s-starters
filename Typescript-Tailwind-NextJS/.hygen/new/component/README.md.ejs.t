---
to: "<%= readme && category !== 'pages' ? `${absPath}/README.md` : null %>"
---
# <%= component_name %>

## Usage

```tsx
import { <%= component_name %> } from "@<%= category %>";
// or
import { <%= component_name %> } from "@<%= category %>/<%= component_name %>";

<<%= component_name %> dummy={"lorem ipsum"}/>;
```

<!-- ## TOOD

- [ ] ...
  - [ ] ...
  - [ ] ...
- [ ] ... -->
