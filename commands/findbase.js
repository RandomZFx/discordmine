
 module.exports = {
	name: 'findbase',
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
	  let findBasetime;
	  const baselocations = require("../baselocations.json")
	  const groups = require('../groups.json');
	  let FBX = baselocations[message.author.username].baseX;
	  let FBY = baselocations[message.author.username].baseY;
	    let groupnames = groups[message.author.username].message;
		var findBaseX = args[0];
		var findBaseY = args[1];
		let findbaseRadius = args[2]
		//console.log("FindBaseX: " + findBaseX, "FindBaseY: " +findBaseY, "FindBaseRadius: "+findbaseRadius);
        message.reply("You Are about to check "+findbaseRadius+ " Blocks arond: " +findBaseX+ "," +findBaseY+ " for raids!")
 
 console.log("X: "+ FBX,"Y: " + FBY);
 maxX = +FBX + 1000
 maxY = +FBY + 1000
 minX = +FBX - 1000
 minY = +FBY - 1000
 console.log("maxX:" + maxX,"minX: " + minX,"maxY: "+maxY,'minY: '+ minY)

if(findBaseX <= maxX  && findBaseX >= minX && findBaseY <= maxY && findBaseY >= minY) {
 message.reply("you have found a raid")
 message.reply("do you wish to raid: "+groupnames)
} else {
   message.reply("you did not find a raid")
  }
  }
	}