---
to: "<%= category === 'pages' ? null : `${absPath}/README.md` %>"
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
