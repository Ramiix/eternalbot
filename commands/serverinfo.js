const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["si"],
  description: "Displays info about the current server",
  permissions: ['SEND_MESSAGES'],
  async execute(client, message, args, profileData) {
    const embed = new MessageEmbed()
      .setColor('BLUE')
      .setTitle(message.guild.name)
      .setThumbnail(message.guild.iconURL())
      .setDescription("Here is some information I found for this server.")
      .addField("Server ID", message.guild.id)
      .addField(
        "Server owner",
        `${message.guild.owner.user.username} *(${message.guild.ownerID})*`
      )
      .addField(
        "Total members | Humans | Bots",
        `${message.guild.members.cache.size} | ${
          message.guild.members.cache.filter((member) => !member.user.bot).size
        } | ${
          message.guild.members.cache.filter((member) => member.user.bot).size
        }`
      )
      .addField(
        "Text channels | Voice channels",
        `${
          message.guild.channels.cache.filter(
            (channel) => channel.type === "text"
          ).size
        } | ${
          message.guild.channels.cache.filter(
            (channel) => channel.type === "voice"
          ).size
        }`
      )
      .addField("Roles", message.guild.roles.cache.size)
      .addField("Created at", message.guild.createdAt);
    return message.channel.send(embed).catch((err) => console.error(err));
  },
};