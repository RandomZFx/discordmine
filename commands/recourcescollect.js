const { MessageEmbed } = require('discord.js')
const fs = require('fs');
const res = require('../resource.json');
 module.exports = {
	name: 'resourcecollect',
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
		//message.reply('this is the test command');
	//	let Inventory = new MessageEmbed() 
	//	.setTitle(message.author.username 	+ "'s" + " Inventory:")
	//	message.channel.send(Inventory)`
	
		var collectRC = args;
		console.log(res.collectRC)
	
		
				fs.readFile('./resource.json', 'utf-8', (err, jsonString) => {
		  if(err) {
		    console.log(err)
		  }else {
		    try {
		      const RS = JSON.parse(jsonString)
		      console.log(RS.collectRC)
		     } catch (err) {
		      console.log("error parsing json", err)
		    }
		    }
		})
		},
};