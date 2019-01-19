const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/'
 
 
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`By : AlBeRNs - /inv - /help  `,"https://www.twitch.tv/dggamingbot")
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
    if (message.content.startsWith("<@529791622448152596>"))
    
    message.reply("عايز ايه .؟ انا كده المفروض ارد عليك . غبي");
    
      



});



client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number ًں‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});



client.on('message', message => {
    if (message.content.startsWith("invitelink")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});



client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
  if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'Sent';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'Sending';
    }
  message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
    message.guild.members.forEach(g => {
      g.send(args.slice(1).join(' ')).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      });
    });
  });
}
});


client.on('message', message => {
         
 
  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات `);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});


client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='/members')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('🌷| Members info')
         .addBlankField(true)
         .addField('📗| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('➡| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });


client.on('message', message => {
    if (message.content === ('/bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@441617122343256070>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ?    **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links  !**`)
    }
}
});


client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const channel = member.guild.channels.find("name", "welcome");
     channel.send(`<@${member.user.id}> ** joined; ** Invited by ** <@${inviter.id}> ** `);
  });
});




client.on('message', message => {
    if (message.content === "/inv") {
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
    .setTitle(`Click Here To Add Me `)
    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=529791622448152596&permissions=0&scope=bot`)  // حط اي دي بوتك
    .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
 message.channel.sendEmbed(embed);
   }
});

client.on('message', message => {
  if (message.content.startsWith(prefix +"avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
         if(message.content === prefix + "closeroom") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "openroom") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
         
});
 

client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});



client.on('message', message => {
    var prefix = "/"
    if (message.content === prefix + 'albernsrooms') {
        if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
	    
         message.guild.createChannel('welcome', 'text')
         message.guild.createChannel('announcements', 'text')
         message.guild.createChannel('Scripting-show', 'text')
          message.guild.createChannel('maps-show', 'text')
         message.guild.createChannel('talk', 'voice')
          message.guild.createChannel('vote', 'text')
         message.guild.createChannel('duo', 'voice')
         message.guild.createChannel('pic', 'text')
         message.guild.createChannel('AFK', 'voice')
          message.guild.createChannel('Chat', 'text')
         message.guild.createChannel('Sugg', 'text')
         message.guild.createChannel('game', 'text')
         message.guild.createChannel('music', 'voice')
                  message.guild.createChannel('bot', 'text')
         message.guild.createChannel('app', 'text')
    
    message.channel.sendMessage('**Done AlBeRNs **')
    }
    });

client.on("message", msg => {
  var prefix = '/'//البركفس
  if(msg.content.startsWith(prefix + 'myguild')){
    let embed = new Discord.RichEmbed()
    .setThumbnail(msg.guild.iconURL)
    .setColor("RANDOM")
    .addField("Year📆",msg.guild.createdAt.getFullYear())
    .addField("Hour📆", msg.guild.createdAt.getHours())
    .addField("Day📆", msg.guild.createdAt.getDay())
    .addField("Month📆", msg.guild.createdAt.getMonth())
    .addField("Minutes📆", msg.guild.createdAt.getMinutes())
    .addField("Seconds📆", msg.guild.createdAt.getSeconds())
    .addField("Full📆", msg.guild.createdAt.toLocaleString())
    .setTimestamp()
    msg.channel.send(embed);
  }
});

client.on('message', async msg => {
  if(msg.content.startsWith('/leaveall')) {
    if(msg.author.id !== '441617122343256070') return;
    client.guilds.forEach(guild => {
      guild.leave();
    });
    msg.channel.send(`Leaving from all servers..`);
  }
});

client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**thx for add me **`)
        guild.owner.send(embed)
  });

client.on('message', msg => {
  if (msg.content === 'Metagaming') {
    msg.reply('خلط معلومات ic ب ooc والعكس');
  }
});

client.on('message',async message => {
var prefix = "/"//هنا حط ال����رفكس حقك
var codes = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(message.content.toLowerCase().split(' ').slice(1).join(" ").toLowerCase())>-1 ).first(); 
if(message.content.startsWith(prefix + "rrole")) {//بادئة الامر الاول
await message.channel.send(`**🔄 | تـــــ إزالة رتبة ــم undefined من الكل **`);
message.guild.members.forEach(m => {m.removeRole(codes)});
}
if(message.content.startsWith(prefix + "arole")) {//بادئة الامر الثاني
await message.channel.send(`**🔄 | تـــــ إضافة رتبة ــم undefined للكل **`);
message.guild.members.forEach(m => {m.addRole(codes)});
}});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "welcome");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});

client.on('message',async message => {
  if(message.content === '/unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**`ADMINISTRATOR`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });

client.on("message", message => {
            if(message.content.startsWith("/app")) { /// Mal , Codes //// O҉Z҉X҉ 
        if(!message.channel.guild) return;////////غير البرفكس
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")//////dont change any thing
            if(!channel) return message.reply("**لانشاء روم التقديمات +روم1 من فضلك اكتب الامر**")/////////dont change
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل **' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **اكتب لنا قواعد تخص الرول بلاي  لا تقل عن 5 قواعد بالتفصيل والامثله  🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **اعطي لنا مثال عن الاربي الخاص بك  📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();///////dont change
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`القواعد`**',`${ask}`)
                        .addField('**`الاربي `**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message', message=>{
            if(message.content.startsWith("/room1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم التقديمات بنجاح**")
            }
            })
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("/acc")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم قبولك بنجاح**`);
    });
  }
}
});
client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("/de")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
          client.on('message', message=>{
            if(message.content.startsWith("/room2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم القبول والرفض بنجاح**")///////dont change
            }
})




   client.on('message', msg => {
  if(msg.content === '/hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('تم')
  }
})   

client.on('message', msg => {
  if(msg.content === '/unhide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('تم')
  }
})                             

client.on('message', message => {
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

client.on('message',async message => {
    const moment = require('moment');
const ms = require('ms')
    var prefix = '/' //بريفكس البوت
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **الروم المختار للجيف اواي (كتابه فقط بدون هاشتاق**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **وقت الجيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                 console.log(e);
               }
             });
           });
         });
       });
     });
   });
 }
});

client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();
 
} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });
 
let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "/";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)
 
                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}
 
});

client.on('message', message => {
       if (message.content.startsWith(prefix + 'botserver')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
     




 message.author.sendMessage(`
 **
/me برفكس البوت = "/"

يمكنك عمل منشن للبوت وهو محترم في الرد . 

/clear + Number ( يجب عليك بعد كتابه الامر كتابه عدد الرسائل التي ستحذفها )

invitelink ( لرابط السيرفر تلقائي ) 

/bc لارسال رسائل في الخاص للجميع 

/user لرؤيه مواصفات حسابك داخل السيرفر 

/members لمعرفه حاله الاعضاء بالسيرفر . وعددهم .

/bot لمعرفه خصائص البوت .

/inv لاضافه البوت . 

/avatar لرؤيه صورتك 

/closeroom لقفل الشات المراد قفله 

/openroom لفتح الشات المراد فتحه .

/mute لاعطاء شخص ميوت . 

/unmute لفك الميوت عن شخص .

/myguild لرؤيه خصائص السيرفر 

/unbanall لفك جميع الباند ال في السيرفر 

/ban لاعطاء باند

/app لعمل تقديم . 
(يجب ان يوجد روم  app ) 

/hide لاخفاء الرومات 

/unhide لاظهار الرومات 

/gstart لعمل جيف اواي وتابع الخطوات 
( لما يجي ويقولك الروم متعملش هاشتاق ) 

/addroleme لاختيار رتبه العاب ويرجي عدم التخريب بالامر  مره واحده فقط .

/invites لمعرفه عدد الانفايتات .

 **`);

    }
});

client.on('message', message => {
  if (message.content.toLowerCase().startsWith(prefix+ `topserver`))  {

const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
message.channel.send(`**Top 10 Servers : **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .`)
}
  });

client.on("message", msg => {
  if(msg.content === '/' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true);
      msg.channel.send({embed: embed})
  }
})

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('/bcall')){
if(!message.author.id === '441617122343256070') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
    if(message.content == prefix + 'slist') {
             if(!message.author.id === '323885452207587329') return;
             if(!message.author.id === '334435543851204618') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{// 
    gname = g.name; // 
    gimg = g.iconURL;// 
    gmemb = g.members.size;// 
    let serv = new Discord.RichEmbed()//
    .setAuthor(gname,gimg)//
    .setThumbnail(gimg)//
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
   
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });
   
    client.on('message', message => {
    if(message.content == prefix + 'slis') {
             if(!message.author.id === '323885452207587329') return;  
             if(!message.author.id === '334435543851204618') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    let serv = new Discord.RichEmbed()
    message.channel.send(`
    **-------------------------**
      Server Name : **${gname}**
      Server MemberCount : **${gmemb} **
      **---------------------------**
            `);
    })
    }
    });


client.on('message', message => {
    if (message.content === "/server2") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)            
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)            
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
   
         message.channel.send({embed:xNiTRoZ});
     }
    }); 




client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return; 
channel.send({embed : embed});
});


client.on('message', msg => {
  if (msg.content === ' اوامر ') {
    msg.reply('سبوت:By : -#AlBeRNs
 اوامر سبورت : 
/ri id report : لقرائه سبب الريبورت 
/ar id :  لقبول الريبورت 
/fr id لقفل الريبورت بدون قفله لانه بدون سبب : 
/cr لقفل الريبورت 
/dr لترك الريبورت لياخذه ادمن 
/goto id للذهاب لشخص 
/gethere id لنقل شخص لك 
/getveh id لنقل سياره لك  
/vehlib لمعرفه ايديات السيارات 
/st تكلم في شات الستاف 
/g للتكلم في شات السبورتات 
/togg لقفل شات السبورتات وعدم رؤيته وتشغيله بكتابه الامر مجددا 
/enterveh idplayer idveh 1/2/3 
/ann للكلام للاعبين ك تحذير او نشر رابط شئ 
/check id لرؤيه معلومات اللاعب .
/checkveh idveh لرؤيه معلومات السياره .
/fixveh id تصليح السياره 
/flip لقلب السياره 
/unflip لاعاده السياره وهي كانت مقلوبه تعيدها 
/fuelveh id 100 لملئ بنزين للسياره 
ملحوظه لجميع الرتب  في امر ملئ بنزين السياره : 
عندما تلمئ بنزين لسياره تكتب : 
/fuelveh id 100 
لكن عندما تملئ بنزين ل طائره : 
/fuelveh id 0 

/gotoveh id للذهاب لسياره ومعرفه مكانها 
/aheal id 100 لتعبئه دم احد  
/ gmlounge    
للذهاب لمكان اجتماع الادمنيه 
/gotoplace للذهاب لمكان مثل مركز المدينه او المحطه او البنك تقوم بكتابه الامر ثم المكان ثم  id  
ولمعرفه الاماكن اكثر اكتب 
/places 
/gotoplace ls للذهاب للمدينه 
/gotoplace igs للذهاب للمحطه 
/gotoplace bank للذهاب للبنك 
/gotoint idint للذهاب لبيت  
/forceapp id سبب 
لمعاقبه شخص وخروجه من السيرف
-#AlBeRNs 
اوامر ادمنيه : 
/ri idreport : لقرائه سبب الريبورت 
/ar id :  لقبول الريبورت 
/fr id لقفل الريبورت بدون قفله لانه بدون سبب : 
/cr لقفل الريبورت 
/dr لترك الريبورت لياخذه ادمن 
/goto id للذهاب لشخص 
/gethere id لنقل شخص لك 
/getveh id لنقل سياره لك  
/vehlib لمعرفه ايديات السيارات 
/st تكلم في شات الستاف 
/g للتكلم في شات السبورتات 
/togg لقفل شات السبورتات وعدم رؤيته وتشغيله بكتابه الامر مجددا 
/enterveh idplayer idveh 1/2/3 
/ann للكلام للاعبين ك تحذير او نشر رابط شئ 
/check id لرؤيه معلومات اللاعب .
/checkveh idveh لرؤيه معلومات السياره .
/fixveh id تصليح السياره 
/flip لقلب السياره 
/unflip لاعاده السياره وهي كانت مقلوبه تعيدها 
/fuelveh id 100 لملئ بنزين للسياره 
ملحوظه لجميع الرتب  في امر ملئ بنزين السياره : 
عندما تلمئ بنزين لسياره تكتب : 
/fuelveh id 100 
لكن عندما تملئ بنزين ل طائره : 
/fuelveh id 0  
/findvehid
/gotoveh id للذهاب لسياره ومعرفه مكانها 
/aheal id 100 لتعبئه دم احد  
/ gmlounge    
للذهاب لمكان اجتماع الادمنيه 
/gotoplace للذهاب لمكان مثل مركز المدينه او المحطه او البنك تقوم بكتابه الامر ثم المكان ثم  id  
ولمعرفه الاماكن اكثر اكتب 
/places 
/gotoplace ls للذهاب للمدينه 
/gotoplace igs للذهاب للمحطه 
/gotoplace bank للذهاب للبنك 
/gotoint idint للذهاب لبيت  
/forceapp id سبب 
لمعاقبه شخص وخروجه من السيرفر 
/a  لتكلم في شات الادمنيه 
/st للتكلم في شات الادمنيه لكن للكل 
/toga لقفل شات الادمنيه 
/marry id id لزواج شخصين ولد وبنت 
/divorce id id  للطلاق . 
/ooc للتكلم في شات للجميع لمعرفهتهم ب شئ 
/togooc لاخد الاراء وهم يكتبون لقفله تكتبه مره اخري 
عقوبه : 
/jail id time سبب 
لسجن شخص 
واذا تريد سجنه بسبب الاسم الغير واقعي 
/jail id 999 اسم غير واقعي ريبورت f2 لتغيره 
/warn لاعطاء نقطه لاحد بسبب خطا 
/vehlib لترستر المعرض 

/showfactions لمعرفه الفاكشنات ورؤيه الايدي وعدد الموجودين 
/setfaction idplayer idfaction 
لتدخيل لاعب فاكشن بدون ليدر 
/setvehfaction idveh idfaction 
لتدخيل سياره فاكشن 
/adde لعمل سهم وكتبتها مرتين مره في المكان ومره في مكان اخر 
/addramp لعمل رافعه  
/delramp id لحذف الرافعه 
/apark id لعمل بارك سياره بدون ركبوها 
/aunimpound idveh لفك حجز سياره 
/addupgrade idplayer all لتعديل علي السياره كامله و نيترو ب امر واحد . 

/setvehtint id 1 لعمل تظليل لسياره 
/changename id اسم جديد 
لتغير الاسم للاعب  

/makeveh id 0 0 idplayer 0/1 1 1 
0 = لنفسك 
1  = للفاكشن ال انت فيه 

/delveh id لحذف سياره 
/restoreveh لاعاده سياره من حذف ( استرجاع ) 
/fixvehs 
/getcolor لتغير لون السياره 
/makecivveh  
لعمل سياره للرخص او نقل البضائع 
/respawnall time 10 / 30 /60 
ثانيه لعمل ريسياون لجميع السيارات  
/makeshop Type idskin name 
لعمل شوب اكتب /makeshop 
ثم اختار التايب ثم ايدي السكن ثم الاسم 
/nearbyshops لمعرفه ايديات الشوبات 
/delshop لحذف شوب 
/moveshop لنقل شوب 
/setintname name لتغير الاسم 
/restock لعمل بضائع للشوبات من جديد 
/restoreint  لحذف جميع ما في البيت من خزنه 
/restoreshop لحذف جميع الشوبات التي في المحل 
/sell id لبيع سياره لاحد او بيت 
/auncuff id لفك كلبشه شخص 
/disarm id لحذف اسلحه من شخص 
/items لاعطاء الاغراض 
/addatm لعمل atm 
/banaccount لعمل باند اكونت لشخص 
/disappear  
للاختفاء 
/givesuperman لاعطاء سبورت طيران 
/pkick لطرد شخص من السيرفر كيك 
/pban لاعطاء باند 
/unban  username  لفك باند 
/revive id لاحياء شخص من جديد 
/sendto id id لبعت شخص لشخص الاول الذي يريد الذهاب للثاني 
/sendveh idveh id لبعت سياره لشخص 
/setskin id idskin لتغير السكن لشخص 
/watch id لرؤيه شخص من مكانك 
/recon id لمراقبه شخص 
ادمن اساسي : 
/makefaction اكتبها ثم اتبع الخطوات 
/delfaction id لحذف فاكشن 
/renamefaction id اسم جديد 
لتغير اسم فاكشن 
/setfactionleader id idfaction لدخول فاكشن بليدر 
/respawnfaction idfaction 
لعمل ريسباون لسياره فاكشن 
/addint اكتب الامر واتبع الخطوات 
/delint id لحذف بيت 
/setintentrance idint  لتغير مكان بيت 
/setintid لتغير ديكور  
موقع ايدي انتروهات : 
https://www.owlgaming.net/library/interiors/ 
/nearbygates لمعرفه ايدي بوابه 
/gates لرؤيه البوبات 
/givemoney id money سبب 
لاعطاء مال لاحد 
/givegc id gc سبب 
لاعطاء جي سي لاحد 
/gunlist لمعرفه ايدي الاسلحه 
/makegun id   لصنع سلاح    
/makeammo id لصنع ذخيره  
/ck id سبب 
لاعطاء سي كي لاحد 

/refresh اولا .
/startres اسم المود لتشغيل المود 
/restartres اسم المود 
لاعاده تشغيل المود 
/stopres اسم المود 
لايقاف المود 


');
  }
});


client.login(process.env.BOT_TOKEN);
