const TelegramBot = require('node-telegram-bot-api');
const { getForecast } = require('./weatherServices');
const { getWeatherMarkup } = require('./getWeatherMarkup');

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
          keyboard: [['Forecast in Maranello']],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
      await bot.sendMessage(id, 'Forecast in Maranello ⛈', menu);
      break;
    }

    case 'Forecast in Maranello': {
      const subMenu = {
        reply_markup: {
          keyboard: [['at intervals of 3 hours', 'at intervals of 6 hours']],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
      await bot.sendMessage(id, 'Select the forecast interval 🌤', subMenu);
      break;
    }
    case 'at intervals of 3 hours': {
      const forecast = await getForecast();
      const markup = getWeatherMarkup(forecast);
      await bot.sendMessage(id, markup, { parse_mode: 'HTML' });
      break;
    }
    case 'at intervals of 6 hours': {
      const forecast = await getForecast();
      const markupLong = getWeatherMarkup(forecast, 6);
      await bot.sendMessage(id, markupLong, { parse_mode: 'HTML' });
      break;
    }
    default:
      await bot.sendMessage(id, 'Try to select one of preset of commands.');
      break;
  }
});
