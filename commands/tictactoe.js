const { tictactoe } = require('reconlx')
module.exports = {
    name: 'tictactoe',
    description: "play a game of tictactoe",
    permissions: ['SEND_MESSAGES'],
    aliases: ["ttt"] ,
    usage: "f-tictactoe @user",
    async execute(client, message, args, Discord, profileData) {
    const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}