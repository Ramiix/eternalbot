module.exports = {
    name: 'boosterperks090',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F47FFF')
        .setTitle('')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: 'Booster Perks', value: `-Access to Booster color roles \n -Instant pic perms \n -Reaction perms \n -Create private voice channels \n -Manage users names \n -Custom text when you're name is typed \n **MORE TO COME SOON !**`},
                    )
        .setImage ('')
        .setFooter('')

        message.channel.send(newEmbed);

    }
}