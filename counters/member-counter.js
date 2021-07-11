module.exports = async (client) =>{
    const guild = client.guilds.cache.get('841332516363436042');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('841525947231764551');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 500000);
}