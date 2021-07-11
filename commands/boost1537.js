module.exports = {
    name: 'boost1537',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('')
        .setTitle('')
        .setURL('')
        .setDescription('')
        .setImage ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58f06GmhEMpe5ua3Nl0IMicgZ9G8hMjlA9g&usqp=CAU')
        .setFooter('')

        message.channel.send(newEmbed);

    }
}