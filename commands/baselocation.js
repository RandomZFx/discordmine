const config = require("../utils/config.json");
const fs = require("fs")
const wz = require("../worldsize.json")
const creategroup = require("./creategroup.js")
 

 module.exports = {
	name: 'baselocation',
	description: 'create your baselocation command',
	aliases: [],
	usage: '',
	guildOnly: false,
	args: false,
	permissions: {
		bot: [],
		user: [],
	},
	execute: (message, args, client) => {
	   client.baselocations = require('../baselocations.json');
	  let filter = m => m.author.id === message.author.id
	 message.reply("check your DMS!")
	 message.author.send("where do you want your base to be?");
	   let baseXLocations = args[0];
	   let baseYLocations = args[1];
	    let wzY = wz[message.author.username].wzX;
	    let wzX = wz[message.author.username].wzY;
	 if (baseXLocations > wzX && baseYLocations > wzY){
		  message.reply("your base location must be set under:"+wzX+" "+wzY)
		  return;
		}  else if(baseXLocations <= wzX && baseYLocations <= wzY) {
	   message.channel.awaitMessages(filter, {
	     max: 1,
	     time: 300000
	   })
	   .then((collected) => {	      
	    console.log(collected.first().content)
	    message.author.send("your base location is: " + collected.first().content);
	     edittedbasemessage = collected.first().content;
	  client.baselocations [message.author.username] = {
  		  baseX: baseXLocations,
    		  baseY: baseYLocations
		}
		}) 
		fs.writeFile("baselocations.json", JSON.stringify (client.baselocations, null, 4), err => {
		  if (err) throw err;
		  message.author.send("base location saved!");
		})
	    }
	    }
	}