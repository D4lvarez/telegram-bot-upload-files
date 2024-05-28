const dotenv = require("dotenv");
const TelegramBot = require("node-telegram-bot-api");

// Load .env file
dotenv.config();

const bot = new TelegramBot(process.env.BOT_KEY, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});
