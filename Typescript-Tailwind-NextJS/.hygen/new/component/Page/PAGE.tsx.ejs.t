---
to: "<%= category === 'page' ? `${folderToSave}/index.tsx` : null %>"
---
import { Seo } from "@molecules";
import { BasicLayout } from "@organisms";
<% if(isStyle){ -%>
import classNames from "classnames";
<% } -%>
<% if(isContext){ -%>
import { useContext } from "react";

import { StyleContext } from "@/context/contextType/StyleContext";
<% } -%>
<% if(isStyle){ -%>

import u from "@/styles/utils.module.scss";
import s from "./<%= fileNameCamelCase %>.module.scss";
<% } -%>

const <%= fileNamePascalCase %> = (): JSX.Element => {
<% if(isStyle){ -%>
const classContainer = classNames([u.basicBorder, s.background]);

<% } -%>
<% if(isContext){ -%>
    const { space } = useContext(StyleContext);
<% } -%>
  return (
    <BasicLayout>
      <Seo title='<%= fileNamePascalCase %>' />
      <main>
        <h1 className='text-2xl font-bold'><%= fileNamePascalCase %></h1>
<% if(isContext){ -%>
        <div className='container mx-auto my-2 sm:my-4' style={{ paddingBottom: `${space}px` }}>
          <span className='block sm:inline'>That page using context `${space}px`</span>
        </div>
<% } -%>
<% if(isStyle){ -%>
        <div className={classContainer}>
          <p className='mt-3 text-xl'>Custom css on page</p>
        </div>
<% } -%>
      </main>
    </BasicLayout>
  );
};

export default <%= fileNamePascalCase %>;
