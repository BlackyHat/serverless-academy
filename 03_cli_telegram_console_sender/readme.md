# CLI: Telegram Console Sender 🖥️🎋

# Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```env
TELEGRAM_BOT_TOKEN=<TELEGRAM_TOKEN>
TELEGRAM_CHAT_ID=<CHAT_ID>
```

# Use CLI

Run it:

```run
env $(cat .env | xargs) node app.js <command>
```

To see all command options:

```help
env $(cat .env | xargs) node app.js --help
```
