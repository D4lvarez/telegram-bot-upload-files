const fs = require("fs");

const searchFilesOnLocalDir = async (path) => {
  const files = await fs.promises.readdir(path);
  const fullPathFiles = files.map((file) => {
    return `${path}\\${file}`;
  });
  return fullPathFiles;
};

const uploadFilesToChannel = async (path, channelId, bot) => {
  const files = await searchFilesOnLocalDir(path);

  for (const file of files) {
    const img = await fs.promises.readFile(file);
    await bot.sendPhoto(
      channelId,
      img,
      {},
      { filename: "Test", contentType: "image/jpg" }
    );
  }
};

module.exports = {
  searchFilesOnLocalDir,
  uploadFilesToChannel,
};
