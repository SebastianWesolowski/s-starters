---
to: "<%= category === 'util' ? `${folderToSave}/${fileNamePascalCase}.ts` : null %>"
---

export const <%= fileNamePascalCase %> = (): Boolean => {

  return true;
}

