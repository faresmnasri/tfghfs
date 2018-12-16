const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");  
const fs = require("fs"); 
const Eris = require("eris");
var bot = new Eris(process.env.BOT_TOKEN);




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



const Eris = require("eris");
var bot = new Eris(process.env.BOT_TOKENs);
var id = "519106470042927116";
//** لاتعدل على شي تحت ذا **//
bot.on("ready", () => {
onstart();
});

function onstart(){

setInterval(function(){

var currentTime = new Date(),
hours = currentTime.getHours() + 1 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds();

if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "صباحاَ";
if (hours >= 24) {
suffix = "مساء";
hours = hours - 24;
}
if (hours == 0) {
hours = 24;
}

bot.editChannel(id, { name : "●⌠  " + hours + ":" + minutes + "  ⌡●"});
}, 60000);

}

bot.connect();

