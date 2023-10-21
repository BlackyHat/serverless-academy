const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sortingCLI = () => {
  rl.on('close', () => {
    console.log('Bye');
    process.exit(0);
  });
  rl.question('Hello', (string) => {
    const userInput = string.trim().split(' ');
    console.log('How would ypu like to sort your values');
    rl.question('Select (1 - 5) and press ENTER: ', (option) => {
      switch (option) {
        case '1':
          console.log('1.Words by name (from A to Z).');
          break;
        case '2':
          console.log('2. Show digits from the smallest.');
          break;
        case '3':
          console.log('3. Show digits from the biggest.');
          break;
        case '4':
          console.log('4. Words by quantity of letters.');
          break;
        case '5':
          console.log('5. Only unique words.');
          break;
        case 'exit':
          console.log('Bye');
          process.exit(0);
        default:
          rl.close();
          break;
      }
      sortingCLI();
    });
  });
};

sortingCLI();
