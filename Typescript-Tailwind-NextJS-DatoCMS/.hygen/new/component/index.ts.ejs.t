---
to: "<%= category === 'pages' ? null : `${absPath}/index.ts` %>"
---
export * from "./<%= component_name %>";
