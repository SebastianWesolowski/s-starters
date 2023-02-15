// https://github.com/jondot/hygen/issues/131
// checkboxes list

module.exports = {
  prompt: ({ prompter, args }) => {
    return prompter
      .prompt([
        {
          type: "input",
          name: "fileName",
          message: "What is the file name?",
        },
        {
          type: "select",
          name: "category",
          message: "Which type component?",
          choices: ["component", "page", "util", "config"],
        },
      ])
      .then(({ category, fileName }) => {
        args.category = category;
        args.fileName = fileName;

        if (category === "component") {
          return prompter.prompt({
            type: "select",
            name: "atomType",
            message: "Which type atom?",
            choices: ["atom", "molecules", "organisms", "templates", "layout"],
          });
        }
        return { atomType: null };
      })
      .then(({ atomType }) => {
        if (atomType) {
          args.atomType = atomType;
        }
        return prompter.prompt({
          type: "confirm",
          name: "isAdvanced",
          message: "Do you want to run the advanced creator ?",
        });
      })
      .then(({ isAdvanced }) => {
        args.isAdvanced = isAdvanced;
        const isChildren = false;
        const isStyle = false;
        const isTest = false;
        const isProps = false;
        const isReadme = false;
        const isContext = false;
        args.isChildren = isChildren;
        args.isStyle = isStyle;
        args.isTest = isTest;
        args.isProps = isProps;
        args.isReadme = isReadme;
        args.isContext = isContext;

        if (isAdvanced) {
          return prompter.prompt([
            {
              type: "confirm",
              name: "isStyle",
              message: "Do you want to have custom style ?",
            },
            {
              type: "confirm",
              name: "isProps",
              message: "Do you want to have props ?",
            },
            {
              type: "confirm",
              name: "isChildren",
              message: "Do you want to have children ?",
            },
            {
              type: "confirm",
              name: "isReadme",
              message: "Do you want to have readme ?",
            },
            {
              type: "confirm",
              name: "isTest",
              message: "Do you want add test ?",
            },
            {
              type: "confirm",
              name: "isContext",
              message: "Do you want to use context ?",
            },
          ]);
        }

        return {
          isChildren,
          isStyle,
          isTest,
          isProps,
          isReadme,
          isContext,
        };
      })
      .then(({ isChildren, isStyle, isTest, isProps, isReadme, isContext }) => {
        args.isChildren = isChildren;
        args.isStyle = isStyle;
        args.isTest = isTest;
        args.isProps = isProps;
        args.isReadme = isReadme;
        args.isContext = isContext;
      })
      .then(() => {
        const { fileName, category, atomType, isStyle, isTest, isContext, isProps, isChildren } = args;

        // camelCase
        args.fileNameCamelCase = fileName[0].toLowerCase() + fileName.slice(1);
        // PascalCase
        args.fileNamePascalCase = fileName[0].toUpperCase() + fileName.slice(1);
        args.path = {};
        args.path.src = `src`;
        args.path.pages = `${args.path.src}/pages`;
        args.path.components = `${args.path.src}/components`;
        args.path.utils = `${args.path.src}/utils`;
        args.path.config = `${args.path.src}/config`;

        if (category === "page" || category === "util" || category === "config") {
          args.folderToSave = `${args.path[category + "s"]}/${args.fileNameCamelCase}`;
        }

        if (category === "component" && atomType) {
          args.folderToSave = `${args.path.components}/${atomType}s/${args.fileNamePascalCase}`;
        }

        return {
          category,
          folderToSave: args.folderToSave,
          isStyle,
          isTest,
          isContext,
          isChildren,
          isProps,
          fileNameCamelCase: args.fileNameCamelCase,
          fileNamePascalCase: args.fileNamePascalCase,
          path: args.path,
          atomType,
        };
      });
  },
};

// Page add question about getStaticProps -> it will change props types
// https://github.com/vercel/next.js/blob/canary/examples/with-typescript/pages/users/%5Bid%5D.tsx
