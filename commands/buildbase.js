
 module.exports = {
	name: 'buildbase',
	description: 'Just a test command',
	aliases: [],
	usage: '',
	guildOnly: false,
	args: false,
	permissions: {
		bot: [],
		user: [],
	},
	execute: (message, args, client) => {
		message.reply('this is the test command');
	},
};