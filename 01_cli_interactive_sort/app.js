const readline = require('readline');
const {
  wordsByNameAZ,
  wordsByLength,
  uniqueWords,
  digitsASC,
  digitsDESC,
  uniqueValues,
} = require('./sortArray');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const msgs = {
  hello: 'Hello. Enter 10 words or digits, dividing them in spaces: : ',
  desc: 'How would you like to sort your values:\n 1. Words by name (from A to Z).\n 2. Show digits from the smallest.\n 3. Show digits from the biggest.\n 4. Words by quantity of letters.\n 5. Show only unique words.\n 6. Show only unique values.\n',
  select: 'Select (1 - 5) and press ENTER: ',
  bye: '\nGoodbye! Come back again!',
};

const onCLose = () => {
  console.log(msgs.bye);
  process.exit(0);
};

const sortingCLI = () => {
  rl.on('close', onCLose);
  rl.question(msgs.hello, (string) => {
    const userInput = string.trim().split(' ');
    console.log(msgs.desc);
    rl.question(msgs.select, (option) => {
      switch (option) {
        case '1':
          console.log(wordsByNameAZ(userInput));
          break;
        case '2':
          console.log(digitsASC(userInput));
          break;
        case '3':
          console.log(digitsDESC(userInput));
          break;
        case '4':
          console.log(wordsByLength(userInput));
          break;
        case '5':
          console.log(uniqueWords(userInput));
          break;
        case '6':
          console.log(uniqueValues(userInput));
          break;
        case 'exit':
          onCLose();
          break;
        default:
          break;
      }
      sortingCLI();
    });
  });
};

sortingCLI();
