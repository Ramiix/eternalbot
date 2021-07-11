const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; 
const fs = require('fs');
const memberCounter = require('./counters/member-counter');
const mongoose = require('mongoose');
require('dotenv').config();


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.once('ready', () => {
    console.log('TwinBot1 is now online and ready to work')
    client.user.setActivity('LoFi Music 24/7', { type: 'PLAYING'}).catch(console.error);
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Eternal');

    guildMember.roles.add(welcomeRole);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '୨⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Levels ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯୧');

    guildMember.roles.add(welcomeRole);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '୨⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Pings ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯୧');

    guildMember.roles.add(welcomeRole);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '୨⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ About Me ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯୧');

    guildMember.roles.add(welcomeRole);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get('841332516363436045');
    if (!channel) return;
    let embed = new Discord.MessageEmbed()

    .setColor('#00000')
  .setTitle("Welcome to Eternal | Social & Pfps!")  
  .setThumbnail(member.user.displayAvatarURL({dynamic: true})) 
  .setDescription('• <#841507023430090792> \n • <#841516722594119683> & <#841515244806733825> \n • <#841332516363436045>')
  .setFooter(`Make sure to boost the server | You are the ${member.guild.memberCount} member :) `)
  .setImage('');



  channel.send("<@"+member.user.id+">",embed);
});

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);

})

const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false
}).then(()=>{
    console.log('connected to the database')
}).catch((err) =>{
    console.log(err);
});

client.login(process.env.DISCORD_TOKEN);