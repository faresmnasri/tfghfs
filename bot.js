const Eris = require("eris");
var bot = new Eris(process.env.BOT_TOKEN);
var id = "513037532510814237";
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
  hours = 12;
  }

bot.editChannel(id, { name : "●⌠ " + hours + ":" + minutes + " ⌡●"});
}, 60000);

}


bot.connect();

