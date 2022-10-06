---
to: <%= absPath %>/types.ts
---
<% if(props){ -%>
export interface I<%= component_name %>Props {
  dummy: string;
}
<% } -%>
<% if(!props){ -%>
export interface I<%= component_name %>Props {}
<% } -%>
