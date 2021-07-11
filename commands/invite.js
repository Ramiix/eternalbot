const invite = ''
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'invite',
    description: 'Sends an invite for the bot',
    permissions: ['ADMINISTRATOR'],

    async execute(client, message, args, profileData) {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Invite')
            .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`Invite me [here](${invite})!`)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed)
    }
}