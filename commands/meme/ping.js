module.exports = {
	name: 'ping',
	description: '!ping',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('pong');
	},
};

/*
module.exports = {
   name: '',
   description: '',
   execute(message, args){
      message.channel.send('';)
   },
};*/

/*



 if (command === 'args-info') {
   if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
   }
   message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}


else if(message.content === `papaj!`){
   message.channel.send("...............__");
   message.channel.send("............../ _)");
   message.channel.send("....._.----._/ /");
   message.channel.send("..../........./");
   message.channel.send(".__/. (.|..(.|");
   message.channel.send("/__.-'|_|--|_|");
}

message.channel.send("		boing         boing         boing");
message.channel.send(" e-e           . - .         . - .         . - .");
message.channel.send("(\_/)\       '       `.   ,'       `.   ,'       .");
message.channel.send(".`-'\ `--.___,         . .           . .          .");
message.channel.send(".   '\( ,_.-'");
message.channel.send(".	     \\");
message.channel.send(".	  	   ^' ");
}*/
