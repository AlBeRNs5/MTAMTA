const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'
 
 
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`AlBeRNs  `,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 


client.on('message', message => {
    if (message.content.startsWith("<@525009192881356841>"))
    
    message.reply("https://discordapp.com/api/oauth2/authorize?client_id=529791622448152596&permissions=0&scope=bot");
    
      



});


client.login(process.env.BOT_TOKEN);
