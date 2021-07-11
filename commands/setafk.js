const quick = require('quick.db');
const prefix = '!';
const ms = require('ms')

module.exports = {
  name: 'afkset',
  permissions: ['SEND_MESSAGES'],
  description: 'Set your afk status',
  async execute(client, message, args, profileData) {
    
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('status change failed');
    
    quick.set(`${message.author.id}_${message.guild.id}_afk`, {
      username: message.member.displayName.replace('[AFK]', ''), 
      active: true, 
      date: Date.now(), 
    });

    message.member
      .setNickname(`[AFK] ${message.member.displayName.replace('[AFK]', '')}`) 
      
      .then(() => {
        return message.reply(`status has been set to afk.`);
      })
      
      .catch(_e => {
        quick.delete(`${message.author.id}_${message.guild.id}_afk`);
        return message.channel.send('Failed to set your status.');
      });

      if (message.author.bot) return;


const status = quick.get(`${message.author.id}_${message.guild.id}_afk`);

if (status && status.active && message.guild.me.hasPermission('MANAGE_NICKNAMES' || 'ADMINISTRATOR')) {
  
  quick.set(`${message.author.id}_${message.guild.id}_afk`, {
    username: message.author.username,
    active: false,
    date: null,
  });
  
   await message.member
    .setNickname(status.username)
      .catch(_e => {
      quick.delete(`${message.author.id}_${message.guild.id}_afk`);
      message.reply('Failed to set your statuse.');
    })
    .then(() => {
      message.reply(`You were afk for ${ms(Date.now() - (status.date || 0))}`);
    })
    
 
}

if (!message.content.startsWith(prefix)) return;
      
  },
};