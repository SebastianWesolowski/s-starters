module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which type component?",
        choices: ["components", "pages", "utils"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
      {
        type: "confirm",
        name: "advanced",
        message: "Do you want advanced crator ?",
      },
    ];

    const atomQuestion = [
      {
        type: "select",
        name: "atomType",
        message: "Which type atom?",
        choices: ["atom", "molecules", "organisms", "layout"],
      },
    ];

    const advQuestions = [
      {
        type: "confirm",
        name: "children",
        message: "Do you want to have children ?",
      },
      {
        type: "confirm",
        name: "props",
        message: "Do you want to have props ?",
      },
      {
        type: "confirm",
        name: "readme",
        message: "Do you want to have readme ?",
      },
      {
        type: "confirm",
        name: "test",
        message: "Do you want add test ?",
      },
      {
        type: "confirm",
        name: "style",
        message: "Do you want to have custom style ?",
      },
    ];

    return inquirer
      .prompt(questions)
      .then((answers) => {
        const { category, component_name } = answers;
        answers.component_name = answers.component_name.charAt(0).toUpperCase() + answers.component_name.slice(1);
        let atom = null;

        // if (category === "components") {
        //   inquirer.prompt(atomQuestion).then((advAtom) => {
        //     console.log(advAtom);
        //     atom = advAtom;
        //     return {
        //       ...advAtom,
        //     };
        //   });
        // }
        console.log(atom);
        //
        //

        //
        // const lo_component_name = answers.component_name.charAt(0).toLowerCase() + answers.component_name.slice(1);
        // const path = `${category}/${component_name}`;
        // let absPath = `src/${path}`;
        //
        // if (category === "pages") {
        //   absPath = `src/${category}/${lo_component_name}`;
        // }
        // let addIndex = false;
        //
        // if (answers.advanced) {
        //   return inquirer.prompt(advQuestions).then((advAnswers) => {
        //     return {
        //       ...answers,
        //       addIndex,
        //       path,
        //       absPath,
        //       lo_component_name,
        //       category,
        //       ...advAnswers,
        //     };
        //   });
        // }
        //
        // const children = false;
        // const style = false;
        // const test = false;
        // const props = false;
        // const readme = false;
        // return { ...answers, addIndex, children, style, test, props, readme, path, absPath, lo_component_name, category };
      })
      .then((answers) => {
        if (category === "components") {
          inquirer.prompt(atomQuestion).then((advAtom) => {
            console.log(advAtom);
            atom = advAtom;
            return {
              ...advAtom,
            };
          });
        }

        console.log(answers);
      });
  },
};
