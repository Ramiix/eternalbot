module.exports = {
    name: 'balance',
    aliases: ["bal", "bl"],
    description: "Check Your Stars Balance",
    permissions: ['ADMINISTRATOR'],
    async execute(client, message, args, Discord, profileData) {
        
        const embed = new Discord.MessageEmbed()
        .setColor('DC143C')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .addFields(
            {name: 'WALLET',value: `${profileData.coins}𝕾`},
            {name: 'BANK',value: `${profileData.bank}𝕾`},
            
        )
        message.channel.send(embed);
    }
}