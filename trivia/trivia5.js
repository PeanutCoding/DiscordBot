//https://geekologie.com/2012/11/worlds-longest-word-has-189819-letters-t.php

module.exports = {
   name: "trivia5",
   description: "!trivia",
   execute(message, arg){
      message.channel.send('The longest word of the world takes 3.5 hours to pronounce and contains 189,819 letters. Of course it is arguable whether a bunch of chemical names placed to one another can be defined as a (whole single) word.');
   },
};
