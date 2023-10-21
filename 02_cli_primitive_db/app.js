const inquirer = require('inquirer');
const { getUsers, addUser, getUser } = require('./servicesDB');

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
    when(answers) {
      return answers.user;
    },
  },
  {
    type: 'input',
    name: 'age',
    message: msgs.age,
    when(answers) {
      return answers.user;
    },
  },
  {
    type: 'confirm',
    name: 'search',
    message: msgs.search,
    when(answers) {
      return !answers.user;
    },
  },
  {
    type: 'input',
    name: 'searchByName',
    message: msgs.searchByName,
    when: async (answers) => {
      if (answers.search === 'Yes') {
        const users = await getUsers();
        console.log(users);
        return true;
      }
    },
  },
];

function main() {
  inquirer.prompt(dialog).then(async (answers) => {
    if (answers.searchByName) {
      const userData = await getUser(answers.searchByName);
      if (userData) {
        console.log(`User ${answers.searchByName} was found.`);
        console.log(userData);
      } else {
        console.log(`User ${answers.searchByName} was not found.`);
      }
    }
    if (!answers.search) {
      return;
    }

    const { user, gender, age } = answers;
    await addUser({ user, gender, age });
    main();
  });
}

main();
