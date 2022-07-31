module.exports = {
	name: 'violin',
	description: 'gif, smallest violin, !violin',
	cooldown: 5,
	execute(message, args){
   	message.channel.send(`https://tenor.com/ohbE.gif`);
   },
};
