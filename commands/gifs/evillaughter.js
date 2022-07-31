//https://media.giphy.com/media/3o72FfM5HJydzafgUE/giphy.gif
//<${message.displayURL({format:'gif', dynamic:true})}>

module.exports = {
	name: 'evil',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	cooldown: 5,
	execute(message, args){
   	message.channel.send(`https://media.giphy.com/media/3o72FfM5HJydzafgUE/giphy.gif`);
   },
};
