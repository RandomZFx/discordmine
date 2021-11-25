const fs = require("fs")
 
 module.exports = {
	name: 'worldsize',
	description: 'Just a test command',
	aliases: [],
	usage: '',
	guildOnly: false,
	args: true,
	permissions: {
		bot: [],
		user: [],
	},
	execute: (message, args, client) => {
	  
	  client.worldsize = require('../worldsize.json');
	  let filter = m => m.author.id === message.author.id
	  message.reply("check your DMS!")
	 message.author.send("where do you want your base to be?");
	   let WorldSizeX = args[0];
	   let WorldSizeY = args[1];
	 
	   message.channel.awaitMessages(filter, {
	     max: 1,
	     time: 300000
	   })
	   .then((collected) => {	      
	    console.log(collected.first().content)
	    message.author.send("The New WorldSize is: " + collected.first().content);
	    client.worldsize [message.author.username] = {
	    wzX: WorldSizeX,
	    wzY: WorldSizeY,
	    };
		fs.writeFile("worldsize.json", JSON.stringify (client.worldsize, null, 4), err => {
		  if (err) throw err;
		  message.author.send("worldsize saved!");
		})
	    });
	},
	}
	
	