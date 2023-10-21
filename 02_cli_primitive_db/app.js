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
      if (answers.search) {
        const users = await getUsers();
        console.log(users);
        return true;
      }
    },
  },
];

function main() {
  inquirer.prompt(dialog).then(async (answers) => {
    const { user, gender, age, search, searchByName } = answers;

    if (searchByName) {
      return await searchUser(searchByName);
    }
    if (search !== undefined) {
      return;
    }

    await addUser({ user, gender, age });
    main();
  });
}

async function searchUser(userName) {
  const result = await getUser(userName);
  if (result) {
    console.log(`User ${userName} was found.`);
    console.log(result);
  } else {
    console.log(`User ${userName} was not found.`);
  }
}

main();
