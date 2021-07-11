const { MessageEmbed } = require("discord.js");
const array = [];
module.exports = {
  name: "servers",
  description: "Lists all the servers your bot is in",
  permissions: ['ADMINISTRATOR'],

  async execute(client, message, args, profileData) {
    client.guilds.cache.forEach((g) => array.push(g));
    const e = new MessageEmbed()
        .setColor('RANDOM')
        .addField('Servers',array.join("\n"), true)
        .addField('# of servers', client.guilds.cache.size, true)
    message.channel.send(e);
  },
};