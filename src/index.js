const dotenv = require("dotenv");
const TelegramBot = require("node-telegram-bot-api");

const { uploadFilesToChannel } = require("./uploadFiles");

// Load .env file
dotenv.config();

const bot = new TelegramBot(process.env.BOT_KEY, { polling: true });
const channelId = process.env.CHANNEL_TLG_ID;
const date = new Date();

bot.onText(/\/uploadFrom (.+)/, async (msg, match) => {
  bot.sendMessage(channelId, "Uploading...");
  await uploadFilesToChannel(match[1], channelId, bot);
  await bot.sendMessage(
    channelId,
    `Finalizado el ${date.toLocaleDateString()}`
  );
});
