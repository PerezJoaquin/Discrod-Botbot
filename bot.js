const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

/*bot.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

bot.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});*/

bot.on('message', function (user, userID, channelID, message, evt){
    if(message.toLowerCase() == "<@410710444182077450>"){
            bot.sendMessage({
                to: channelID,
                message: ':eggplant:'
            });
}
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
