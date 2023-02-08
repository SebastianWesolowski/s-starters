---
to: "<%= children || category === 'pages' ? null : `${absPath}/${component_name}.tsx` %>"
---
import { FC } from "react";
<% if(style){ -%>

import styles from "./<%= component_name %>.module.scss";

<% } -%>

import { I<%= component_name %>Props } from "./types";

<% if(props){ -%>
export const <%= component_name %>: FC<I<%= component_name %>Props> = ({ dummy }): JSX.Element => (
<% } -%>
<% if(!props){ -%>
export const <%= component_name %>: FC<I<%= component_name %>Props> = (): JSX.Element => (
<% } -%>
  <div<%= style ? ` className={styles.container} ` : '' %>>
<% if(props){ -%>
    <h1>{dummy} is children ? =<%= children %></h1>
<% } -%>
<% if(!props){ -%>
    <h1>no props is children ? =<%= children %></h1>
<% } -%>
  </div>
);
