const { Command } = require('commander');
const { sendMsg, sendPhoto } = require('./telegramServices');
const program = new Command();
program.name('app').version('0.1.3');

program
  .command('message')
  .alias('m')
  .argument('<message>')
  .description('Send message to Telegram Bot.')
  .action(async (message) => {
    await sendMsg(message);
    process.exit(0);
  });

program
  .command('photo')
  .alias('p')
  .argument('<path>')
  .description(
    'Send photo to Telegram Bot. Just drag and drop it console after p-flag.'
  )
  .action(async (photo) => {
    await sendPhoto(photo);
    console.log('You successfully sent the photo to your bot.');
    process.exit(0);
  });

program.parse();
