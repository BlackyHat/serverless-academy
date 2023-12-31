const TelegramBot = require('node-telegram-bot-api');

const TOKEN =
  process.env.TELEGRAM_BOT_TOKEN.trim() || 'YOUR_TELEGRAM_BOT_TOKEN';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || 'YOUR_TELEGRAM_BOT_CHAT_ID';

const bot = new TelegramBot(TOKEN, { polling: true });

async function sendMsg(msg) {
  try {
    await bot.sendMessage(CHAT_ID, msg);
  } catch (error) {
    console.log(error.code);
    console.log(error.response.body);
    process.exit(0);
  }
}
async function sendPhoto(photoUrl) {
  try {
    await bot.sendPhoto(CHAT_ID, photoUrl);
  } catch (error) {
    console.log(error.code);
    console.log(error.response.body);
    process.exit(0);
  }
}
module.exports = {
  sendMsg,
  sendPhoto,
};
