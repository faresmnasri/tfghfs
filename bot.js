const Eris = require("eris");
var bot = new Eris(process.env.BOT_TOKEN);
var id = "529084682567024650";
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

if (hours >= 24) {

hours = hours - 24;
}
if (hours == 24) {
hours = 24;
}
    
bot.editChannel(id, { name :"   ●⌠" + hours +  ":"  + minutes + "⌡●   "});
}, 60000);
    
}
    
bot.connect();
