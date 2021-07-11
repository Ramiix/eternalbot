  
module.exports = {
    name: 'poker',
    aliases: [],
    description: "Play a game of poker With Your Friends",
    permissions: ['SEND_MESSAGES'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send('You need to be in a Voice Channel to use this command!');
		client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
    			return message.channel.send(`${invite.code}`);
		});
    }
}