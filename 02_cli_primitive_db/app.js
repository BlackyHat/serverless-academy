const inquirer = require('inquirer');

const msgs = {
  user: "Enter the user's name. To cancel press Enter:",
  gender: 'Choose your Gender.',
  age: 'Enter your age:',
  search: 'Would you to search values in DB?',
  searchByName: "Enter user's name you wanna find in DB:",
};

const dialog = [
  {
    type: 'input',
    name: 'user',
    message: msgs.user,
  },
  {
    type: 'list',
    name: 'gender',
    message: msgs.gender,
    choices: ['male', 'female'],
  },
  {
    type: 'input',
    name: 'age',
    message: msgs.age,
  },
  {
    type: 'confirm',
    name: 'search',
    message: msgs.search,
  },
  {
    type: 'input',
    name: 'searchByName',
    message: msgs.searchByName,
  },
];

function main() {
  inquirer.prompt(dialog).then(async (answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    main();
  });
}

main();
