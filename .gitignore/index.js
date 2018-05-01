const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDI5NzQ1ODg4MTUyNTE4Njcx.DcgpyQ.PyViJfV4Jvfq12kwYYl9aTMCo-E";
const ownerID = "174565176492687361"
const PREFIX = "-";

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "fucc u"
];

var bot = new Discord.Client();

var servers = {};

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "📈à-rejoin📈").send(`**Bienvenue à** __**${member.guild.name}**__ **maintenant** __**${member.user.username}**__ **est avec nous!**`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "📉à-quitter📉").send(`__**${member.user.username}**__ **n'est plus sur notre serveur** __**${member.guild.name}**__`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find("name", "✓NDNG✓");
    member.addRole(role)
})

bot.on("ready", async () => {

	console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
	bot.user.setActivity("NDNG - Mehmet60 || -help", {type: "WATCHING"});
  
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Salut") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "salut") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Wesh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "wesh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Wsh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "wsh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "CC") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "cc") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "welcome") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Welcome") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(30000); });
    }
});

const CLEAR_MESSAGES = '-clearchat';

bot.on('ready', () => {
    console.log('Je susi prêt à éffacer les messages!');
    bot.on('message', message => {
      if (message.content == CLEAR_MESSAGES) {
  
        // Check the following permissions before deleting messages:
        //    1. Check if the user has enough permissions
        //    2. Check if I have the permission to execute the command
  
        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Désolé, vous n'avez pas la permission d'exécuter la commande \""+message.content+"\"");
          console.log("Désolé, vous n'avez pas la permission d'exécuter la commande \""+message.content+"\"");
          return;
        } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Désolé, je n'ai pas la permission d'exécuter la commande \""+message.content+"\"");
          console.log("Désolé, je n'ai pas la permission d'exécuter la commande \""+message.content+"\"");
          return;
        }
  
        // Only delete messages if the channel type is TextChannel
        // DO NOT delete messages in DM Channel or Group DM Channel
        if (message.channel.type == 'text') {
          message.channel.fetchMessages()
            .then(messages => {
              message.channel.bulkDelete(messages);
              messagesDeleted = messages.array().length; // number of messages deleted
  
              // Logging the number of messages deleted on both the channel and console.
              message.channel.sendMessage("Suppression des messages réussie. Nombre total de messages supprimés: "+messagesDeleted).then(d_msg => { d_msg.delete(30000); });
              console.log('Suppression des messages réussie. Nombre total de messages supprimés: '+messagesDeleted).then(d_msg => { d_msg.delete(30000); });
            })
            .catch(err => {
              console.log('Erreur lors de la suppression en bloc');
              console.log(err);
            });
        }
      }
    });
  });

const agree = "<:yes:439323501569114112>";
const disagree = "<:yes:439323501569114112>";

module.exports.run = async (bot, message, args) => {
    
    let msg = await message.channel.send("Vote!");
    await msg.react(agree);
    await msg.react(disagree);

    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
    message.channel.send(`Voting complete! \n\n${agree}: ${reactions.get(agree).count-1}\n${disagree}: ${reactions.get(disagree).count-1}`);
}

module.exports.help = {
    name: "await"
}

exports.run = async (bot, message, args) => {
  if (!args) return message.reply("You must have something to vote for!")
  if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
    message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
    const pollTopic = await message.channel.send(`${args}`);
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
};

module.exports.help = {
    name: "await"
}

exports.run = async (bot, message, args) => {
    if (!args) return message.reply("You must have something to vote for!")
    if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
        message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
        const pollTopic = await message.channel.send(message.content.slice(2));
        await pollTopic.react(`✅`);
        await pollTopic.react(`⛔`);
        // Create a reaction collector
        const filter = (reaction) => reaction.emoji.name === '✅';
        const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}

module.exports.help = {
    name: "await"
}

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " WELCOME!");

    member.addRole(member.guild.roles.find("name", "NewDayNewGame"));

    member.guild.createRole({
        name: member.user.username,
        color: generateHex(),
        permissions: []
    }).then(function(role) {
        member.addRole(role);
    });
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
        message.delete (30);
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`).then(d_msg => { d_msg.delete(9999); });
            break;
        case "info":
            message.reply('ton avatar est '+message.author.avatarURL).then(d_msg => { d_msg.delete(8990); });
            message.reply('ton id est '+message.author.id).then(d_msg => { d_msg.delete(8990); });
            message.reply('ton pseudo est '+message.author.username).then(d_msg => { d_msg.delete(8990); });
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Je ne peux pas lire ça");
            break;
         case "embed":
            var embed = new Discord.RichEmbed()
                .addField("Test Title", "Test Description", true)
                .addField("Test Titl2e", "Test De2scription", true)
                .addField("Test 3Title", "Test De3scription", true)
                .addField("Test 3Titl53e", "Test De3sc345ription")
                .addField("3Test Titl4e", "Test De3s4cription")
                .setColor(0x00FFFF)
                .setFooter("Ce message est assez cool, ohhh ai-je dit message que je veux dire EMBED gotem")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendMessage(embed);
            break;
            case "regle":
            message.delete (30);
         var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
         var day = message.guild.createdAt.getDate()
         var month = 1 + message.guild.createdAt.getMonth()
         var year = message.guild.createdAt.getFullYear()
         var sicon = message.guild.iconURL;
         var embed = new Discord.RichEmbed()
          .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
          .setColor(0x00ffff)
          .setDescription("__***:x:INTERDIT:x:***__")
          .addField("1. Moins la malédiction, plus nous sommes heureux.")
          .addField("2.Faites vos repères en particulier.")
          .addField("3.Faites vos repères en particulier.")
          .addField("4. Toute annonce de chaîne ou de discord est interdit.")
          .addField("5. Le partage sexuel, de sang, de sauvagerie est interdit.")
          .addField("6. La vente / l'échange de comptes de jeux, de souvenirs, de matériel de jeu, etc., et le partage de liens de référence sont interdits.")
          .addField("7. La religion, la langue, la race et la politique sont strictement interdites.\n8. Les spams et les inondations sont interdits.")
          .addField("8. Les spams et les inondations sont interdits.")
          .addField("9. Si vous voulez partager des chansons, vidéos, photo, liens, ext... vous pouvez partager les liens vers #:camera:clip-video-url-foto || PUBLICITÉ BAN!");
         message.channel.sendMessage(embed).then(d_msg => { d_msg.delete(8990); });
         break;
         case "régleadmin":
         message.delete (30);
      var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      var day = message.guild.createdAt.getDate()
      var month = 1 + message.guild.createdAt.getMonth()
      var year = message.guild.createdAt.getFullYear()
      var sicon = message.guild.iconURL;
      var embed = new Discord.RichEmbed()
       .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
       .setColor(0x00ffff)
       .setDescription("__***:x:INTERDIT:x:***__")
       .addField("1. Moins la malédiction, plus nous sommes heureux.")
       .addField("2.Faites vos repères en particulier.")
       .addField("3.Faites vos repères en particulier.")
       .addField("4. Toute annonce de chaîne ou de discord est interdit.")
       .addField("5. Le partage sexuel, de sang, de sauvagerie est interdit.")
       .addField("6. La vente / l'échange de comptes de jeux, de souvenirs, de matériel de jeu, etc., et le partage de liens de référence sont interdits.")
       .addField("7. La religion, la langue, la race et la politique sont strictement interdites.\n8. Les spams et les inondations sont interdits.")
       .addField("8. Les spams et les inondations sont interdits.")
       .addField("9. Si vous voulez partager des chansons, vidéos, photo, liens, ext... vous pouvez partager les liens vers #:camera:clip-video-url-foto || PUBLICITÉ BAN!");
      message.channel.sendMessage(embed);
      break;
      case "aide":
         message.delete (30);
      var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      var day = message.guild.createdAt.getDate()
      var month = 1 + message.guild.createdAt.getMonth()
      var year = message.guild.createdAt.getFullYear()
      var sicon = message.guild.iconURL;
      var embed = new Discord.RichEmbed()
       .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
		.setColor(0x00ffff)
		.setTitle("Liste de commandes:")
		.addField("Donnera la liste de commande actuelle", "-help")
		.addField("Voire tu a combien de ping pour le bot", "-ping")
		.addField("Voire les régles de ce serveur", "-regle")
		.addField("Voire les réseaux sociaux", "-pub")
		.addField("Savoire tes info personnel", "-info")
		.addField("Savoire les info de serveur", "-serveurinfo")
		.addField("Voire tes Roles #🎖role🎖 ", "-role")
		.addField("Pour la musique", "m!play [URL]")
		.addField("Faire une raport a quelqu'un", "-raport")
		.addField("Supprimer le chat (ADMIN)", "-clearchat")
		.addField("Va faire dire au bot quelque chose (ADMIN)", "-say [text]")
		.addField("Va faire dire au bot une annonce et taguer tout le monde (ADMIN)", "-announcement [text]");
		message.channel.send({embed}).then(d_msg => { d_msg.delete(9999); });
      break;
      case "aideadmin":
         message.delete (30);
      var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      var day = message.guild.createdAt.getDate()
      var month = 1 + message.guild.createdAt.getMonth()
      var year = message.guild.createdAt.getFullYear()
      var sicon = message.guild.iconURL;
      var embed = new Discord.RichEmbed()
      .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
      .setColor(0x00ffff)
      .setTitle("Liste de commandes: ADMIN")
      .addField("Donnera la liste de commande actuelle", "-help")
      .addField("Voire tu a combien de ping pour le bot", "-ping")
      .addField("Voire les régles de ce serveur", "-regle")
      .addField("Voire les réseaux sociaux", "-pub")
      .addField("Savoire tes info personnel", "-info")
      .addField("Savoire les info de serveur", "-serveurinfo")
      .addField("Voire tes Roles #🎖role🎖", "-role")
      .addField("Pour la musique", "m!play [URL]")
      .addField("Faire une raport a quelqu'un", "-raport")
      .addField("Supprimer le chat (ADMIN)", "-clearchat")
      .addField("Va faire dire au bot quelque chose (ADMIN)", "-say [text]")
      .addField("Va faire dire au bot une annonce et taguer tout le monde (ADMIN)", "-announcement [text]");
      message.channel.send({embed}).then(d_msg => { d_msg.delete(9999); });
      break;
            case "pub":
            message.delete (30);
         var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
         var day = message.guild.createdAt.getDate()
         var month = 1 + message.guild.createdAt.getMonth()
         var year = message.guild.createdAt.getFullYear()
         var sicon = message.guild.iconURL;
         var embed = new Discord.RichEmbed()
          .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
          .setColor(0x00ffff)
          .setDescription("__***<:verified:436604647268941834>LFN PUBLICITÉ***__")
          .addField("__```Youtube:```__",
    "https://goo.gl/RQZ6ZA")
          .addField("__```Instagram:```__",
    "https://goo.gl/Jex2aU")
    .addField("__```Snapchat:```__",
    "https://goo.gl/c1QtT9")
    .addField("__```Twitch:```__",
    "https://goo.gl/yLkmpL")
    .addField("__```Facebook Groupe:```__",
    "https://goo.gl/1Co2hL")
    .addField("__```Discord:```__",
    "https://goo.gl/rwu1wK")
    .addField("__```LfNBoT:```__",
    "https://goo.gl/gSGYa3")
    .addField("__```TeamSpeak:```__",
    "https://goo.gl/Mvdx8d")
         message.channel.sendMessage(embed).then(d_msg => { d_msg.delete(8990); });
         break;
    case "publicitéadmin":
         message.delete (30);
      var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      var day = message.guild.createdAt.getDate()
      var month = 1 + message.guild.createdAt.getMonth()
      var year = message.guild.createdAt.getFullYear()
      var sicon = message.guild.iconURL;
      var embed = new Discord.RichEmbed()
       .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
       .setColor(0x00ffff)
       .setDescription("__***<:verified:436604647268941834>LFN PUBLICITÉ***__")
       .addField("__```Youtube:```__",
 "https://goo.gl/RQZ6ZA")
       .addField("__```Instagram:```__",
 "https://goo.gl/Jex2aU")
 .addField("__```Snapchat:```__",
 "https://goo.gl/c1QtT9")
 .addField("__```Twitch:```__",
 "https://goo.gl/yLkmpL")
 .addField("__```Facebook Groupe:```__",
 "https://goo.gl/1Co2hL")
 .addField("__```Discord:```__",
 "https://goo.gl/rwu1wK")
 .addField("__```LfNBoT:```__",
 "https://goo.gl/gSGYa3")
 .addField("__```TeamSpeak:```__",
 "https://goo.gl/Mvdx8d")
      message.channel.sendMessage(embed);
      break;
        case "serveurinfo":
               message.delete (30);
            var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
            var day = message.guild.createdAt.getDate()
            var month = 1 + message.guild.createdAt.getMonth()
            var year = message.guild.createdAt.getFullYear()
            var sicon = message.guild.iconURL;
            var embed = new Discord.RichEmbed()
             .setAuthor(message.guild.name, sicon)
             .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
             .setColor("0x00ffff")
             .setThumbnail(sicon)
             .addField("ID", message.guild.id, true)
             .addField("prénom", message.guild.name, true)
             .addField("Owner", message.guild.owner.user.tag, true)
             .addField("Région", message.guild.region, true)
             .addField("Chaînes", message.guild.channels.size, true)
             .addField("Membres", message.guild.memberCount, true)
             .addField("Humains", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
             .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
             .addField("En ligne", online.size, true)
             .addField("Les rôles", message.guild.roles.size, true);
            message.channel.sendMessage(embed);
            break;
            case "help":
            message.delete (30);
         var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
         var day = message.guild.createdAt.getDate()
         var month = 1 + message.guild.createdAt.getMonth()
         var year = message.guild.createdAt.getFullYear()
         var sicon = message.guild.iconURL;
         var embed = new Discord.RichEmbed()
         .setAuthor("[ADMIN]" + message.author.username + "[ADMIN]", "https://imgur.com/hd1v8Pr.png")
          .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
          .setColor(0x00ffff)
          .setDescription("__***:heavy_check_mark::red_circle:BIENVENUE A NOTRE SERVEUR:red_circle::heavy_check_mark:***__")
          .setFooter(" Pour la commande d'aide [-aide]", "https://imgur.com/rAgsGxu.png")
          .setImage("https://imgur.com/StHMUDI.png")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setURL("https://www.youtube.com/user/parislikuscu")
  .addField("__```Invite lfnbot:```__",
	"https://goo.gl/gSGYa3")
    .addField("__```Join server:```__", "https://goo.gl/rwu1wK", true);
         message.channel.sendMessage(embed).then(d_msg => { d_msg.delete(8990); });
         break;
            case "say":
            message.delete()
	if (message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.RichEmbed()
		.setColor(0x00ffff)
		.setDescription(message.author.username + " dit: " + args.join(" "));
		message.channel.send({embed})
	}
         break;
         case "role":
         message.delete (30);
      var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
      var day = message.guild.createdAt.getDate()
      var month = 1 + message.guild.createdAt.getMonth()
      var year = message.guild.createdAt.getFullYear()
      var sicon = message.guild.iconURL;
      var embed = new Discord.RichEmbed()
       .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
       .setColor(0x00ffff)
       .addField(message.author.username, "Roles: " + message.member.roles.map(role => role.name).join(" || ")) // user, roles
	   .setColor(0x00ffff)
	   .setThumbnail(message.author.avatarURL)
      message.channel.sendMessage(embed);
      break;
         case "announcement":
         message.delete()
         if (message.member.hasPermission("ADMINISTRATOR")) {
            const color = args[0]
                 
            const text = args.slice(1).join(" ");
            if (text.length < 1) return message.channel.send("Can not announce nothing");
            //const colour = args.slice(2).join("");
            const embed = new Discord.RichEmbed()
            .setColor("0x" + color)
            .setTitle("Important Announcement:")
            .setDescription(text);
            message.channel.send("@everyone")
            message.channel.send({embed})
        }
      break;
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + " sadasaasdsdaasd");
            break;
        case "removerole":
            message.channel.sendMessage("removed");
            message.member.removeRole(message.member.guild.roles.find("name", "NewDayNewGame"));
            break;
        case "deleterole":
            message.member.guild.roles.find("name", "NewDayNewGame").delete();
            message.channel.sendMessage("delet");
            break;
        case "play":
            if (!args[1]) {
                message.channel.sendMessage("S'il vous plaît fournir un lien");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("Vous devez être dans The Voice :)");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            break;
        case "skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;
        case "shop":
            var server = servers[message.guild.id];
            break;
        default:
            message.channel.sendMessage(" ")
        }
        
    });


    bot.on("message", (message) => {
	
        /*
            Object message :
            
            - mentions.users = utilisateurs mentionnés
            - author.username = auteur du message
            - content = contenu du message
            - createdTimestamp = timestamp du message
            - member.guild.name = nom du serveur
            - channel.name = nom du topic
            - channel.topic = description du topic
            - channel.guild.roles = rôles sur le serveur
        */
        
        if(message.content.substring(0, 7) == "-report")
        {
            message.delete (30);
            var commande = message.content.split(" ");
            
            if(typeof commande[1] === 'undefined')
            {
                if(message.author.bot === false)
                {
                    // Nom d'utilisateur pas entré = afficher l'aide
                    message.reply("**Aide pour la commande report :** \n\n Pour rapporter un ou plusieurs utilisateurs ayant un comportement inapproprié, mettre le nom ou les noms des utilisateurs après la commande report. \n\n Vous pouvez également rajouter une raison particulière avec l'attribut `-r:\"Votre raison\"`. \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple 1 :** `!report @user` \n **Exemple 2 :** `!report @user1 @user2` \n **Exemple 3 :** `!report @user1 -r:\"Une raison\"`");
                }
            }
            else
            {
                // Vérifier les noms + raison de signalement
                var verifNom = true;
                var raisonSignalement = null;
                var inOptionRaison = false;
                
                for(var i = 1; i < commande.length; i++)
                {
                    // Les noms des personnes citées commencent par "<", le caractère suivant étant @
                    if(commande[i].charAt(1) !== "@")
                    {
                        // On ne prend pas en compte l'option -r (raison)
                        if(commande[i].substring(0, 4) == "-r:\"")
                        {
                            raisonSignalement = commande[i].substring(3);
                            inOptionRaison = true;
                        }
                        else
                        {
                            if(inOptionRaison == false)
                            {	
                                verifNom = false;
                            }
                            else
                            {
                                raisonSignalement = raisonSignalement + " " + commande[i];
                            }
                        }
                    }
                }
                
                if(verifNom === true)
                {
                    // Vérification des abus
                    var aAppele = false;
                    for(var i = 0; i < dernierAppel.length; i++)
                    {
                        if(dernierAppel[i][0] == message.author.id)
                        {
                            // Un signalement toutes les 3 minutes autorisé
                            if((message.createdTimestamp - dernierAppel[i][1]) < 180000)
                            {
                                aAppele = true;
                            }
                            else
                            {
                                aAppele = false;
                                dernierAppel.splice(i, 1);
                            }
                        }
                    }
                    
                    if(aAppele == false)
                    {
                        dernierAppel.push([message.author.id, message.createdTimestamp]);
                        
                        var moderateurs = new Array();
                        
                        var sontAvertis = true;
                        
                        message.channel.guild.roles.forEach(function(role)
                        {
                            // Chercher les modérateurs parmi tous les rôles
                            
                            if (role.hasPermission('BAN_MEMBERS'))
                            {
                                role.members.forEach(function(member)
                                {
                                    var estDejaPrevenu = false;
                                    for(var j = 0; j < moderateurs.length; j++)
                                    {
                                        if(member == moderateurs[j])
                                        {
                                            // Est déjà prévenu
                                            estDejaPrevenu = true;
                                        }
                                    }
                                        
                                    if(estDejaPrevenu == false)
                                    {
                                        moderateurs.push(member);
                                    
                                        // Fonction conversion timestamp -> Date
                                        function timeConverter(timestamp)
                                        {
                                            var a = new Date(timestamp);
                                            var tabMois = ['Janv.','Févr.','Mars','Avri.','Mai.','Juin','Juil.','Août','Sept.','Octo.','Nove.','Déce.'];
                                            var annee = a.getFullYear();
                                            var mois = tabMois[a.getMonth()];
                                            var date = a.getDate();
                                            var heure = a.getHours();
                                            var min = a.getMinutes();
                                            var sec = a.getSeconds();
                                            var time = "le " + date + ' ' + mois + ' ' + annee + ' à ' + heure + 'h' + min + ':' + sec ;
                                            return time;
                                        }
                                        
                                        // Reporter les utilisateurs
                                        var MP = "Un rapport soumis " + timeConverter(message.createdTimestamp) + " par **" + message.author.username + "** a été effectué à l'encontre de ";
                                        
                                        message.mentions.users.forEach(function(user)
                                        {
                                            MP = MP + "@" + user.username + " ";
                                        });
                                        
                                        MP =  MP + "sur *" + member.guild.name + "/" + message.channel.name + "*";
                                        
                                        // Prise en charge de la raison du signalement
                                        if(raisonSignalement != null)
                                        {
                                            MP = MP + " pour la raison suivante : *" + raisonSignalement + "*";
                                        }
                                        
                                        try
                                        {
                                            member.user.sendMessage(MP);
                                        }
                                        catch(e)
                                        {
                                            sontAvertis = false;
                                        }
                                    }
                                });
                            }
                        });
                        
                        if(sontAvertis == true)
                        {
                            message.reply("Signalement effectué :wink: !");
                        }
                    }
                }
            }
        }
    });

    bot.on("message", (message) => {
	
        /*
            Object message :
            
            - mentions.users = utilisateurs mentionnés
            - author.username = auteur du message
            - content = contenu du message
            - createdTimestamp = timestamp du message
            - member.guild.name = nom du serveur
            - channel.name = nom du topic
            - channel.topic = description du topic
            - channel.guild.roles = rôles sur le serveur
        */
        
        if(message.content.substring(0, 7) == "-raport")
        {
            message.delete (30);
            var commande = message.content.split(" ");
            
            if(typeof commande[1] === 'undefined')
            {
                if(message.author.bot === false)
                {
                    // Nom d'utilisateur pas entré = afficher l'aide
                    message.reply("**Aide pour la commande report :** \n\n Pour rapporter un ou plusieurs utilisateurs ayant un comportement inapproprié, mettre le nom ou les noms des utilisateurs après la commande report. \n\n Vous pouvez également rajouter une raison particulière avec l'attribut `-r:\"Votre raison\"`. \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple 1 :** `!report @user` \n **Exemple 2 :** `!report @user1 @user2` \n **Exemple 3 :** `!report @user1 -r:\"Une raison\"`").then(d_msg => { d_msg.delete(8990); });
                }
            }
            else
            {
                // Vérifier les noms + raison de signalement
                var verifNom = true;
                var raisonSignalement = null;
                var inOptionRaison = false;
                
                for(var i = 1; i < commande.length; i++)
                {
                    // Les noms des personnes citées commencent par "<", le caractère suivant étant @
                    if(commande[i].charAt(1) !== "@")
                    {
                        message.delete (30);
                        // On ne prend pas en compte l'option -r (raison)
                        if(commande[i].substring(0, 4) == "-r:\"")
                        {
                            raisonSignalement = commande[i].substring(3);
                            inOptionRaison = true;
                        }
                        else
                        {
                            if(inOptionRaison == false)
                            {	
                                verifNom = false;
                            }
                            else
                            {
                                raisonSignalement = raisonSignalement + " " + commande[i];
                            }
                        }
                    }
                }
                
                if(verifNom === true)
                {
                    // Vérification des abus
                    var aAppele = false;
                    for(var i = 0; i < dernierAppel.length; i++)
                    {
                        if(dernierAppel[i][0] == message.author.id)
                        {
                            // Un signalement toutes les 3 minutes autorisé
                            if((message.createdTimestamp - dernierAppel[i][1]) < 180000)
                            {
                                aAppele = true;
                            }
                            else
                            {
                                aAppele = false;
                                dernierAppel.splice(i, 1);
                            }
                        }
                    }
                    
                    if(aAppele == false)
                    {
                        dernierAppel.push([message.author.id, message.createdTimestamp]).then(d_msg => { d_msg.delete(8990); });
                        
                        var moderateurs = new Array();
                        
                        var sontAvertis = true;
                        
                        message.channel.guild.roles.forEach(function(role)
                        {
                            // Chercher les modérateurs parmi tous les rôles
                            
                            if (role.hasPermission('BAN_MEMBERS'))
                            {
                                role.members.forEach(function(member)
                                {
                                    var estDejaPrevenu = false;
                                    for(var j = 0; j < moderateurs.length; j++)
                                    {
                                        if(member == moderateurs[j])
                                        {
                                            // Est déjà prévenu
                                            estDejaPrevenu = true;
                                        }
                                    }
                                        
                                    if(estDejaPrevenu == false)
                                    {
                                        moderateurs.push(member);
                                    
                                        // Fonction conversion timestamp -> Date
                                        function timeConverter(timestamp)
                                        {
                                            var a = new Date(timestamp);
                                            var tabMois = ['Janv.','Févr.','Mars','Avri.','Mai.','Juin','Juil.','Août','Sept.','Octo.','Nove.','Déce.'];
                                            var annee = a.getFullYear();
                                            var mois = tabMois[a.getMonth()];
                                            var date = a.getDate();
                                            var heure = a.getHours();
                                            var min = a.getMinutes();
                                            var sec = a.getSeconds();
                                            var time = "le " + date + ' ' + mois + ' ' + annee + ' à ' + heure + 'h' + min + ':' + sec ;
                                            return time;
                                        }
                                        
                                        // Reporter les utilisateurs
                                        var MP = "Un rapport soumis " + timeConverter(message.createdTimestamp) + " par **" + message.author.username + "** a été effectué à l'encontre de ";
                                        
                                        message.mentions.users.forEach(function(user)
                                        {
                                            MP = MP + "@" + user.username + " ";
                                        });
                                        
                                        MP =  MP + "sur *" + member.guild.name + "/" + message.channel.name + "*";
                                        
                                        // Prise en charge de la raison du signalement
                                        if(raisonSignalement != null)
                                        {
                                            MP = MP + " pour la raison suivante : *" + raisonSignalement + "*";
                                        }
                                        
                                        try
                                        {
                                            member.user.sendMessage(MP);
                                        }
                                        catch(e)
                                        {
                                            sontAvertis = false;
                                        }
                                    }
                                });
                            }
                        });
                        
                        if(sontAvertis == true)
                        {
                            message.reply("Signalement effectué :wink: !").then(d_msg => { d_msg.delete(8990); });
                        }
                    }
                }
            }
        }
    });

bot.login(TOKEN);
