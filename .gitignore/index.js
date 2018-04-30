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
	
	if(message.content.substring(0, 7) == "-PUB")
	{
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("__***Réseau Sociaux***__ \n\n Youtube : https://goo.gl/RQZ6ZA\nInstagram : https://goo.gl/Jex2aU\nSnapchat : https://goo.gl/c1QtT9\nTwitch : https://goo.gl/yLkmpL\nFacebook Groupe : https://goo.gl/1Co2hL\nDiscord : https://goo.gl/rwu1wK\nTeamSpeak : ndng.ts3wolf.com [NE FONCTION PLUS]");
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
	
	if(message.content.substring(0, 7) == "-bup")
	{
		message.delete (30);
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("__***Réseau Sociaux***__ \n\n Youtube : https://goo.gl/RQZ6ZA\nInstagram : https://goo.gl/Jex2aU\nSnapchat : https://goo.gl/c1QtT9\nTwitch : https://goo.gl/yLkmpL\nFacebook Groupe : https://goo.gl/1Co2hL\nDiscord : https://goo.gl/rwu1wK\nTeamSpeak : ndng.ts3wolf.com [NE FONCTION PLUS]").then(d_msg => { d_msg.delete(99999); });
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
	
	if(message.content.substring(0, 7) == "-régle")
	{
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("__***:x:INTERDIT:x:***__ \n\n 1. Moins la malédiction, plus nous sommes heureux.\n2.Faites vos repères en particulier.\n3.Faites vos repères en particulier.\n4. Toute annonce de chaîne ou de discord est interdit.\n5. Le partage sexuel, de sang, de sauvagerie est interdit.\n6. La vente / l'échange de comptes de jeux, de souvenirs, de matériel de jeu, etc., et le partage de liens de référence sont interdits.\n7. La religion, la langue, la race et la politique sont strictement interdites.\n8. Les spams et les inondations sont interdits.\n9. Si vous voulez partager des chansons, vidéos, photo, liens, ext... vous pouvez partager les liens vers #📷clip-video-url-foto || PUBLICITÉ BAN!");
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
	
	if(message.content.substring(0, 7) == "-regle")
	{
		message.delete (30);
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("__***:x:INTERDIT:x:***__ \n\n 1. Moins la malédiction, plus nous sommes heureux.\n2.Faites vos repères en particulier.\n3.Faites vos repères en particulier.\n4. Toute annonce de chaîne ou de discord est interdit.\n5. Le partage sexuel, de sang, de sauvagerie est interdit.\n6. La vente / l'échange de comptes de jeux, de souvenirs, de matériel de jeu, etc., et le partage de liens de référence sont interdits.\n7. La religion, la langue, la race et la politique sont strictement interdites.\n8. Les spams et les inondations sont interdits.\n9. Si vous voulez partager des chansons, vidéos, photo, liens, ext... vous pouvez partager les liens vers #📷clip-video-url-foto || PUBLICITÉ BAN!").then(d_msg => { d_msg.delete(99999); });
			}
		}
	}
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
        case "serveurinfo":
            var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
            var day = message.guild.createdAt.getDate()
            var month = 1 + message.guild.createdAt.getMonth()
            var year = message.guild.createdAt.getFullYear()
            var sicon = message.guild.iconURL;
            var embed = new Discord.RichEmbed()
             .setAuthor(message.guild.name, sicon)
             .setFooter(` Pour la commande d'aide [-aide] • ${day}.${month}.${year} `, "https://imgur.com/rAgsGxu.png")
             .setColor("#7289DA")
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

bot.login(TOKEN);
