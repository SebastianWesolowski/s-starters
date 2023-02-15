---
to: "<%= (isProps || isChildren) && category === 'component' ? `${folderToSave}/types.ts` : null %>"
---
<% if(isChildren){ -%>
import { PropsWithChildren } from "react";

<% } -%>
<% if(isChildren && isProps){ -%>
export interface I<%= fileNamePascalCase %>Props extends PropsWithChildren {
  dummy: string;
}
<% } else if(isChildren){ -%>
export interface I<%= fileNamePascalCase %>Props extends PropsWithChildren {}
<% } else if(isProps) { -%>
export interface I<%= fileNamePascalCase %>Props {
  dummy: string;
}
<% } -%>
