const fs = require("fs")
const { MessageEmbed } = require('discord.js')
 
 module.exports = {
	name: 'group',
	description: 'create a group command',
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
     let _message = client.groups[message.author.username].message;
      let GroupEmbed = new MessageEmbed()
      .setTitle("Groups:")
      .addField("Group Name: \n", `${_message}`, true)
      .addField("Group Members", `${message.author.username}`, true)
     message.channel.send(GroupEmbed)
    }
 }