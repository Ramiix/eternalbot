module.exports = {
    name: "bugreport",
    aliases: ['bug', 'reportbug'],
    permissions: ['SEND_MESSAGES'],
    description: 'let users report bugs',
    async execute(client, message, args, Discord, profileData) {
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('853450420508819507')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        message.channel.send("**Bug report has been sent!**")
    }
}
