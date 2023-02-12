---
to: "<%= category === 'component' ? `${folderToSave}/${fileNamePascalCase}.tsx` : null %>"
---
<% if(isStyle){ -%>
import classNames from "classnames";
<% } -%>
<% if(isContext){ -%>
import { FC, useContext } from "react";

<% } else { -%>
import { FC } from "react";

<% } -%>
<% if(isContext){ -%>
import { StyleContext } from "@/context/contextType/StyleContext";

<% } -%>
<% if(isStyle){ -%>
import s from "./<%= fileNamePascalCase %>.module.scss";
import u from "@/styles/utils.module.scss";

<% } -%>
<% if(isProps){ -%>
import { I<%= fileNamePascalCase %>Props } from "./types";
<% } -%>

<% if(isProps){ -%>
export const <%= fileNamePascalCase %>: FC<I<%= fileNamePascalCase %>Props> = ({ dummy }): JSX.Element => {
<% } else { -%>
export const <%= fileNamePascalCase %>: FC = (): JSX.Element => {
<% } -%>
<% if(isStyle){ -%>
  const classContainer = classNames([u.basicBorder, s.background]);

<% } -%>
<% if(isContext){ -%>
  const { space } = useContext(StyleContext);

<% } -%>
  return (
    <div>
      <h2>Component <%= fileNamePascalCase %></h2>
<% if(isProps){ -%>
      <p className='mt-3 text-xl'>Component using props dummy ${dummy}</p>
<% } -%>
<% if(isContext){ -%>
      <div className='container mx-auto my-2 sm:my-4' style={{ paddingBottom: `${space}px` }}>
        <span className='block sm:inline'>That Component <%= fileNamePascalCase %> using context `${space}px`</span>
      </div>
<% } -%>
<% if(isStyle){ -%>
      <div className={classContainer}>
        <p className='mt-3 text-xl'>Custom css on component</p>
      </div>
<% } -%>
    </div>
  );
};
