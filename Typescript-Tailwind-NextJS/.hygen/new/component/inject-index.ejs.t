---
inject: true
to: "<%= category === 'pages' ? null : `src/${category}/index.ts` %>"
append: true
---
export * from "./<%= component_name %>";
