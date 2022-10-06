---
to: "<%= category === 'pages' ? `src/pages/${lo_component_name}/index.tsx` : null %>"
---
import { FC } from "react";

import { Seo } from "@/components";

import { BasicLayout } from "@/layout";
<% if(style){ -%>

import styles from "./<%= component_name %>.module.scss";
<% } -%>

import { I<%= component_name %>Props } from "./types";
<% if(props){ -%>
const <%= component_name %>: FC<I<%= component_name %>Props> = ({ dummy }): JSX.Element => (
<% } -%>
<% if(!props){ -%>
const <%= component_name %>: FC<I<%= component_name %>Props> = (): JSX.Element => (
<% } -%>
  <BasicLayout>
    <Seo />
    <main<%= style ? ` className={styles.container} ` : '' %>>
    <% if(props){ -%>
      <h1>Page <%= component_name %> no props</h1>
    <% } -%>
    <% if(!props){ -%>
      <h1>Page <%= component_name %> {dummy}</h1>
    <% } -%>
    </main>
  </BasicLayout>
);

export default <%= component_name %>;
