const profileModel = require('../models/profileSchema');
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  permissions: ['ADMINISTRATOR'],
  description: "Deposit stars into your bank!",
  async execute(client, message, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
    try {
      if (amount > profileData.stars) return message.channel.send(`You don't have that amount of coins to deposit`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`You deposited **${amount}𝕾** into your bank`);
    } catch (err) {
      console.log(err);
    }
  },
};