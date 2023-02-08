---
to: "<%= isStyle && category === 'page' ? `${folderToSave}/${fileNameCamelCase}.module.scss` : null %>"
---
.background {
  @apply rounded-md bg-blue-100
}
