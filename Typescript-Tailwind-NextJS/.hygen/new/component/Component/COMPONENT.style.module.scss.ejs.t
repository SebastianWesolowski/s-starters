---
to: "<%= isStyle && category === 'component' ? `${folderToSave}/${fileNamePascalCase}.module.scss` : null %>"
---
.background {
  @apply rounded-md bg-blue-100
}
