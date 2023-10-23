const { Command } = require('commander');

const program = new Command();
program.name('app').version('0.1.3');

program
  .command('message')
  .alias('m')
  .argument('<message>')
  .description('Send message to Telegram Bot.')
  .action((message) => {
    console.log(`print: ${message}`);
  });

program
  .command('photo')
  .alias('p')
  .argument('<path>')
  .description(
    'Send photo to Telegram Bot. Just drag and drop it console after p-flag.'
  )
  .action((photo) => {
    console.log(`print: ${photo}`);
    console.log('You successfully sent the photo to your bot.');
  });

program.parse();
