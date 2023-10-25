const { readFile, writeFile } = require('fs/promises');
const path = require('path');

const dbPath = path.join('db', 'users.txt');

const getUsers = async () => {
  try {
    const data = await readFile(dbPath, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
};
const getUser = async (userName) => {
  try {
    const users = await getUsers();

    const result = users.filter(
      ({ user }) => user.toLowerCase() === userName.toLowerCase()
    );
    return result.length > 0 ? result : null;
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
};

const addUser = async (newUser) => {
  try {
    const users = await getUsers();
    users.push(newUser);
    await writeFile(dbPath, JSON.stringify(users), 'utf-8');
    return;
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
};

module.exports = { getUsers, addUser, getUser };
