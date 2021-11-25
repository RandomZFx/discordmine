const config = require("../utils/config.json");
const fs = require("fs")
 

 module.exports = {
	name: 'leavegroup',
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

client.groups = require('../../groups.json');

      edittedmessage = message.content.slice(14);
	  client.groups [message.author.username] = {
  		  message: edittedmessage  
		}
		fs.writeFile("groups.json", JSON.stringify (client.groups, null, 4), err => {
		  if (err) throw err;
		  message.channel.send("You New Group Has been Saved!");
		})
	}
}