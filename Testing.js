const Discord = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db'); 
const prefix = "--"
   


bot.on('message', async message => {
    db.add("userBalance_" + message.author.id, 1)
  var guild = message.guild;
  var author = message.author;
  var user = message.mentions.users.first() || message.author
 
  let bal = await db.fetch("userBalance_" + user.id);
  if(bal === null) bal = 0;
  if (message.content.toLowerCase().startsWith(prefix + 'bal')) { 
      var embed = new Discord.RichEmbed();
      if (message.author.bot) return;
      embed.setColor('BLUE');
      embed.setDescription(bal);
    message.channel.send({embed});
  }
    
    
    var user = message.mentions.users.first();
  var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
  if (message.content.toLowerCase().startsWith(prefix + 'givemoney')) {
      db.add("userBalance_" + user.id, 100)
      var embed = new Discord.RichEmbed();
      if (message.author.bot) return;
      embed.setColor('BLUE');
      embed.setDescription(bal);
    message.channel.send({embed});
  }
    
    
    if (message.content.toLowerCase() === prefix + "ping") {
   		const m = await message.channel.send("Ping?");
    		var ping = Math.round(m.createdTimestamp - message.createdTimestamp)
                  var embed = new Discord.RichEmbed();
                    embed.setColor('BLUE');
                    embed.setDescription("Latency ping " + ping + "ms\nApi ping " + Math.round(bot.ping) + 'ms')
                    m.edit({embed});
                }
}); 




bot.login(process.env.BOT_TOKEN)
