module.exports = {
   name: 'Marco',
   description: '!Marco',
   cooldown: 5,
   execute(message, args){
      message.channel.send('Polo!');
   },
};
