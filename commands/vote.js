module.exports = {
    name: 'vote',
    permissions: ['SEND_MESSAGES'],
    description: "this is a vote command!",
    execute(client, message, args, profileData){
        message.channel.send('https://top.gg/servers/841332516363436042'); 

    }
}