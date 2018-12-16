const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");  
const fs = require("fs"); 
const Eris = require("eris");
var bot = new Eris("process.env.BOT_TOKEN");




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-setstats`,"http://twitch.tv/S-F")
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
});



client.on('message',async msg => {
  if(msg.channel.type === "dm") return;
if(msg.author.bot) return;
var p = "-";
if(msg.content.startsWith(p + "setstats")) {
if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **you should have MANAGE CHANNELS role **');
if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **the bot has not MANAGE CHANNELS role **');
var stats = msg.guild.createChannel('📊 Server Stats 📊', 'category').then(kk => {
  var member =msg.guild.createChannel('Members Count [ 0 ] ', 'voice').then(member => {
        var voiceonline =msg.guild.createChannel('Voiceonline [ 0 ]', 'voice').then(voiceonline => {
             var time =msg.guild.createChannel('🕐 - Time  ', 'voice').then(time => {
              var c = msg.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
    member.setParent(kk);            
    voiceonline.setParent(kk);
    time.setParent(kk);
    c.setParent(kk);

 
    member.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  voiceonline.overwritePermissions(msg.guild.id, {
   CONNECT: false,
   SPEAK: false
 });
  time.overwritePermissions(msg.guild.id, {
   CONNECT: false,
   SPEAK: false
 });
 c.overwritePermissions(msg.guild.id, {
  CONNECT: false,
  SPEAK: false
});



setInterval(function() {

  var currentTime = new Date(),
  hours = currentTime.getHours() + 3 ,
  minutes = currentTime.getMinutes(),
  seconds = currentTime.getSeconds(),
  years = currentTime.getFullYear(),
  month = currentTime.getMonth(),
  day = currentTime.getDay();

  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
  }
  if (hours == 0) {
      hours = 12;
  }
  member.setName(`Members Count : [ ${msg.guild.members.size} ]`)
voiceonline.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
   time.setName(`🕐 - Time : 「${hours} : ${minutes} :  ${suffix}」`);
     c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
},1000);
                })

             })
        })
      })
})
        
}
});

