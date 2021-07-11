const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "animehug",
    permissions: ['SEND_MESSAGES'],
    aliases: ['hug'],
    description: 'sends a random anime hug gif',
    async execute(client, message, args, profileData) {
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} heres a hug!`)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}