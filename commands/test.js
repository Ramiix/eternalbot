module.exports = {
    name: 'rules3750',
    permissions: ['SEND_MESSAGES'],
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00000')
        .setTitle('')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: 'Rule 1', value: '‎ Use common sense, be respectful and civil towards others.'},
            {name: 'Rule 2', value: '‎ Do not insult others and do not use racist / sexist / otherwise offensive language. We have zero-tolerance for hate speech in any shape or form.'},
            {name: 'Rule 3', value: ' We do not tolerate bullying, harassment, telling someone to kill themselves, hate speech or discrimination of any kind this including attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation, religious affiliation, or disabilities will result in a ban due to the severity'},
            {name: 'Rule 4', value: ' Do not self-promote or advertise your Discord server and other products or services in any chats or direct messages.'},
            {name: 'Rule 5', value: ' Do not spam in chats. Avoid excessive messages.'},
            {name: 'Rule 6', value: ' This server is an English only speaking server.'},
            {name: 'Rule 7', value: ' Refrain from starting arguments.'},
            {name: 'Rule 8', value: ' Do not share or leak personal information. This includes but is not limited to private images, names, addresses and IPs, This Will result in an instant ban'},
            {name: 'Rule 9', value: ' Discord Community Guidelines and Terms of Service apply at all times. You must be at least 13 years old to use Discord. Not following the discord TOS will result in an instant ban no appeal'},
            {name: 'Rule 10',value: ' The nword, f slur, and hard r are a banned word, saying these will lead to a mute/ban.'},
            {name: 'Rule 11',value: ' And follow all discords TOS!'},
            
                    )
        .setImage ('')
        .setFooter('')

        message.channel.send(newEmbed);

    }
}