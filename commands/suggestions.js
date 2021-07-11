module.exports = {
    name: 'suggestions',
    permissions: ['SEND_MESSAGES'],
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creats a suggestion!',
    execute(message, args, cmd, client, discord, profileData) {
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestion');
        if(!channel) return message.channel.send('suggestions channel does not exist!');
    }
}