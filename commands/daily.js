const profileModel = require("../models/profileSchema");
module.exports = {
    name: 'daily',
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    cooldown: 86400,
    description: "Gives You Your Daily share of stars.| Can be used every 24 hours",
    usage: "!daily",
    async execute(client, message, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    return message.channel.send(`${message.author.username}, You received **${randomNumber}𝕾**`);
  },
};