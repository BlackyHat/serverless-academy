# Telegram Weather Forecast ⛅⛈️☀️

Simple weather forecast for your favorite city. You can get the forecast at 3 or 6 hours interval via menu in telegram bot. Enjoy

# Environment Variables 🛠️💻🔗

To run this project, you will need to add the following environment variables to your .env file

```env
TELEGRAM_BOT_TOKEN=<TELEGRAM_TOKEN>
WEATHER_API_TOKEN=<WEATHER_API_TOKEN>
```

# Use telegram bot

Run bot:

```run
env $(cat .env | xargs) node app.js
```
