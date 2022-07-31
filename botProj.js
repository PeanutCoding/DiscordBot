	const fs = require('fs');
	const Discord = require('discord.js');
	const { prefix, token } = require('./config.json');
	const client = new Discord.Client();

	client.commands = new Discord.Collection();
	client.cooldowns = new Discord.Collection();

	const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


	for (const file of eventFiles) {
		const event = require(`./events/${file}`);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args, client));
		} else {
			client.on(event.name, (...args) => event.execute(...args, client));
		}
	}

	const commandFolders = fs.readdirSync('./commands');

	for (const folder of commandFolders) {
		const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
		for (const file of commandFiles){
			const command = require(`./commands/${folder}/${file}`);
			client.commands.set(command.name, command);
		}
	}
 	// trivia collection, may be outsourcable
 	const client2 = new Discord.Client();
 	client2.commands = new Discord.Collection();

 	//const commandFolders2 = fs.readdirSync('./commands');
 	const commandFiles2 = fs.readdirSync(`./trivia`).filter(file => file.endsWith('.js'));
 	for(const file2 of commandFiles2){
	 	const command2 = require(`./trivia/${file2}`);
	 	client2.commands.set(command2.name, command2);
 	}



	client.on('message', message => {
		// predicate whether or not the command is valid
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift();//.toLowerCase();

		if(commandName === 'trivia'){
			//return message.channel.send('This feature is currently unavailable!');
			const command2 = client2.commands.random();
			try {
				command2.execute(message, args);
			} catch (error) {
				console.error(error);
				message.reply('there was an error trying to execute that command!');
			}
	 	}

		const command = client.commands.get(commandName)
				|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		// If command doesn't exist, return
		if (!client.commands.has(commandName)) return;

		if(message.channel.type === 'dm'){
			return message.reply("*slowly comes out of the dark sideway, touches pocket and keeps staring through sunglasses. \nyou hear a rusty voice*\nget away or else..\n*hides in the darkness again*");
		}

		// this is for commands, which need arguments. I. E. being in a guild and
		// challenge another player,  is !command <user>.
		if (command.args && !args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
			/*let reply = `You didn't provide any arguments, ${message.author}!`;

		  	if(command.usage){
		     	reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
	  	  	}
		  	return message.channel.send(reply);*/
		}
		try {
			command.execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}
	});
// needed for the bot login, token is extracted from a txt
client.login(token);
/*
		const command = client.commands.get(commandName);

		// Adds cooldowns to commands, user specific
		const { cooldowns } = client;

		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;
*/
		/*if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
		}*/
/*
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);*/
