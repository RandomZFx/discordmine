const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fs = require('fs');

const Discord = require('discord.js');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handler/eventHandler.js');
	eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handler/commandHandler.js');
	const fs = require('fs')
	commandHandler(err, files, client);
});

 client.login('Nzc4NDQ3NTQ3NTQyOTI5NDI4.X7SHxg.Gtv9Ay6vT6CqqcyDhLI20ycx-5Y');
 
 