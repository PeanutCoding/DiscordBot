module.exports = {
   name: 'greed',
   description: '!greed',
   cooldown: 5,
   execute(message, args){
      message.channel.send('I activate Pot of Greed! This allows me to take 2 cards from my deck and add them to my hand!');
   },
};
