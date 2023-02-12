---
to: "<%= isProps && category === 'component' ? `${folderToSave}/types.ts` : null %>"
---
export interface I<%= fileNamePascalCase %>Props {
  dummy: string;
}
