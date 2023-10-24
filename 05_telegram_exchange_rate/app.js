const TelegramBot = require('node-telegram-bot-api');

const { getExRate } = require('./storageData');
const { getCurrencyMarkup } = require('./getCurrencyMarkup');

const TOKEN =
  process.env.TELEGRAM_BOT_TOKEN.trim() || 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', async (msg) => {
  const {
    chat: { id },
  } = msg;

  switch (msg.text) {
    case '/start': {
      const menu = {
        reply_markup: {
          keyboard: [['Exchange Rates']],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
      await bot.sendMessage(id, 'Exchange Rates 💵', menu);
      break;
    }

    case 'Exchange Rates': {
      const subMenu = {
        reply_markup: {
          keyboard: [['USD', 'EUR']],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
      await bot.sendMessage(id, 'Select the currency 💶', subMenu);
      break;
    }
    case 'USD': {
      const currencyRate = await getExRate('USD');
      const markup = getCurrencyMarkup('USD', currencyRate);
      await bot.sendMessage(id, markup, { parse_mode: 'HTML' });
      break;
    }
    case 'EUR': {
      const currencyRate = await getExRate('EUR');
      const markup = getCurrencyMarkup('EUR', currencyRate);
      await bot.sendMessage(id, markup, { parse_mode: 'HTML' });
      break;
    }
    default:
      await bot.sendMessage(id, 'Try to select one of preset of commands.');
      break;
  }
});
