module.exports =  {
    aliases: ["Nick", "nick"],
    description: "Sets a user's nickname",
    permissions: ['ADMINISTRATOR'],
    botPerms: ["MANAGE_NICKNAMES"],
    
    
    async execute(client, message, args, profileData) {
      const member = message.mentions.members.first();
  
      if (!member) return message.channel.send("Specify a member.");
      const nick = args.slice(1).join(" ");
  
      if (!nick) return message.channel.send("Specify a nickname.");
      member
        .setNickname(nick)
        .catch((e) =>
          message.channel.send(`Couldn't change this user's nickname.`)
        );
    }
  };
