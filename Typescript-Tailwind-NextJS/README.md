# Konwns issue:

.git can't be found (see https://git.io/Jc3F9)
that poblem relatet with curent stucture git folder is paret not curtrent path.

```just create temporary git init folder
$ git init
```

---

cypress

--
\_\_templates - <https://github.com/magicspon/nextjs-craftcms-mono/tree/main/_templates>

wesolowski workspace

<https://swagger.io/tools/swagger-codegen/>

i18n

---

write minification all element in public

sprawdzić do robi i jak połączyć socket z tailwind-nextjs-starter-blog

hygen podczas tworzenia componentu zrobic checkboxy z plikami ktore potrzeba

hygen dummy props to słaby pomysł

"postcss-rename": "^0.6.1" w postcss -// require('postcss-rename')({strategy: "minimal"}),

## Tools:

❯ npx sort-package-json

sprawdzić różnice pomiędzy nano a bez nano

## accessibility testing library.

https://www.npmjs.com/package/@axe-core/react

## Do sprawdzenia:

"@hookform/resolvers": "^2.9.10",
"axios": "^1.1.3",
"clsx": "^1.2.1",
"hamburger-react": "^2.5.0",
"joi": "^17.7.0",
"json-server": "^0.17.1",
"lodash.debounce": "^4.0.8",
"react-hook-form": "^7.39.1",
"react-transition-group": "^4.4.5",
"swiper": "^8.4.4",
},
"devDependencies": {
"@types/lodash.debounce": "^4.0.7",
"@types/react-transition-group": "^4.4.5",
"@typescript-eslint/eslint-plugin": "^5.42.0",

## Eslint z AED:

{
"extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
"plugins": ["@typescript-eslint"],
"settings": {
"react": { "version": "detect" },
"import/resolver": {
"node": {
"extensions": [".js", ".jsx", ".ts", ".tsx"],
"moduleDirectory": ["node_modules"]
}
}
},
"ignorePatterns": ["node_modules/*", ".next/*", ".out/*"],
"rules": {
"@typescript-eslint/consistent-type-imports": "error",
"import/no-unused-modules": [
"error",
{
"unusedExports": true,
"src": ["**/**/*.ts", "**/*.tsx"],
"ignoreExports": ["**/pages/**/*.tsx", "**/__mocks__/**/*.tsx", "**/mocks/**/*.ts"]
}
],
"import/order": [
"error",
{
"groups": ["builtin", "external", "internal"],
"pathGroups": [{ "pattern": "react", "group": "external", "position": "before" }],
"pathGroupsExcludedImportTypes": ["react"],
"alphabetize": { "order": "asc", "caseInsensitive": true }
}
],
"no-console": "warn",
"react/display-name": "off",
"no-restricted-imports": [
"error",
{
"patterns": ["../../*", ".*"]
}
],
"@typescript-eslint/no-explicit-any": "error",
"react/jsx-curly-brace-presence": [
"error",
{ "props": "never", "children": "never", "propElementValues": "always" }
],
"no-empty-pattern": "error",
"no-empty": ["error", { "allowEmptyCatch": true }],
"quotes": ["error", "single"]
}
}

## Varianty w Tailwind - z kursu react

### Skrypt kopiujący zmienne evn do prod

## clsx do usunięcia
