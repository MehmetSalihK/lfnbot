const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const client = new Discord.Client();

const TOKEN = "NDI5NzQ1ODg4MTUyNTE4Njcx.Da5_fA.GloqYSvp908GXceRGmgfxBqRh64";
const PREFIX = "-";

function generatoHex() {
    return "#" + Math.floor(Math.random() * 167777215).toString(16);
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

bot.on("ready", function() {
    bot.user.setGame("LfNBoT, !help");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Salut") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "salut") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Wesh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "wesh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Wsh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "wsh") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
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
	
	if(message.content.substring(0, 7) == "-PUB")
	{
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("__***Réseau Sociaux***__ \n\n Youtube : https://goo.gl/RQZ6ZA\nInstagram : https://goo.gl/Jex2aU\nSnapchat : https://goo.gl/c1QtT9\nTwitch : https://goo.gl/yLkmpL\nFacebook Groupe : https://goo.gl/1Co2hL\nDiscord : https://goo.gl/jNBq2A\nLFN TeamSpeak : ts.speed-ts.fr:12677");
			}
		}
	}
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Coucou") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "coucou") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "CC") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "cc") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "welcome") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Welcome") {
        message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
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
				message.reply("__***:x:INTERDIT:x:***__ \n\n 1. Moins la malédiction, plus nous sommes heureux.\n2.Faites vos repères en particulier.\n3.Faites vos repères en particulier.\n4. Toute annonce de chaîne ou de discord est interdit.\n5. Le partage sexuel, de sang, de sauvagerie est interdit.\n6. La vente / l'échange de comptes de jeux, de souvenirs, de matériel de jeu, etc., et le partage de liens de référence sont interdits.\n7. La religion, la langue, la race et la politique sont strictement interdites.\n8. Les spams et les inondations sont interdits.");
			}
		}
	}
});

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " WELCOME!");

    member.addRole(member.guild.roles.find("name", "!"));

    member.guild.createRolle({
        name: member.user.username,
        color: generatoHex(),
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
            message.channel.sendMessage("Pong!")
            break;
        case "info":
            message.channel.sendMessage("Je suis une super drop non créée par moi");
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
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + " sadasaasdsdaasd");
            break;
        case "removerole":
            message.channel.sendMessage("removed");
            message.member.removeRole(message.member.guild.roles.find("name", "!"));
            break;
        case "deleterole":
            message.member.guild.roles.find("name", "!").delete();
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
