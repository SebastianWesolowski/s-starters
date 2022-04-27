module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which type component?",
        choices: ["components", "layout", "pages", "utils"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
      {
        type: "confirm",
        name: "children",
        message: "Do you want to have children ?",
      },
      {
        type: "confirm",
        name: "style",
        message: "Do you want to have custom style ?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      answers.component_name = answers.component_name.charAt(0).toUpperCase() + answers.component_name.slice(1);

      const { category, children, style, component_name } = answers;
      const lo_component_name = answers.component_name.charAt(0).toLowerCase() + answers.component_name.slice(1);
      const path = `${category}/${component_name}`;
      let absPath = `src/${path}`;

      if (category === "pages") {
        absPath = `src/${category}/${lo_component_name}`;
      }
      let addIndex = false;

      console.log(
        "🚀 ~ file: index.js ~ line 39 ~ returninquirer.prompt ~ { ...answers, addIndex, children, path, absPath, category }",
        { ...answers, addIndex, children, style, path, absPath, lo_component_name, category }
      );
      return { ...answers, addIndex, children, style, path, absPath, lo_component_name, category };
    });
  },
};
