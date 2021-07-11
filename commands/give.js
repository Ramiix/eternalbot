module.exports = {
    name: 'give',
    aliases: [],
    description: "Give a user some senkos",
    usage: "!give @tag <amount>",
    permissions: ['ADMINISTRATOR'],
    async execute(client, message, args, Discord, profileData) {
        const user = message.mentions.users.first();
        if(!user) return message.channel.send('Who do you wanna give coins to?');

        const starsToDonate = args[1];
        if(!starsToDonate) return message.lineReply('Please Specify how many coins you wanna give');

        if(isNaN(starsToDonate)) return message.LineReply('Coins must be in whole numbers');

        const amountGiven = parseInt(starsToDonate)

        if(await client.bal(message.author.id) < amountGiven ) return message.LineReply('You dont have that many coins to give');

        await client.rmv(message.author.id, amountGiven);
        await client.add(user.id, amountGiven);

        message.channel.send(`${message.author} gave **${amountGiven}𝕾** to ${user}`)

    }
}    