  

module.exports = {
    name: 'shop',
    aliases: ["market"],
    description: "View what the shop has to offer",
    usage: "!shop",
    permissions: ['ADMINISTRATOR'],
    async execute(client, message, args, profileData) {
        if(items.length === 0) return message.lineReply('There are no items for sale');
        
        const shoplist = items
        .map((value, index) => {
            return `∎ ${value.item} ➨ ${value.price} 𝕾`;
            // return `**${index+1})** ${value.item} -> ${value.price} stars`;
        });


        const newEmbed = new Discord.MessageEmbed()
        .setColor('DC143C')
        .setTitle('SHOP')
        .setDescription(shoplist)
        .setFooter('use !buy <item> to Buy an item!')

        message.channel.send(newEmbed);


    }
}