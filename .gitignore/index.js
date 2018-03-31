const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDI5NzQxOTMxNTUyMTc4MTg2.DaGD5A.AdOEkqncBbRDxnN-oWSfeHS2ydU";
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

var server = {};

bot.on("ready", function() {
    bot.user.setGame("LfNBoT, !help");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Salut") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Coucou") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "coucou") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "CC") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "cc") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "welcome") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Welcome") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
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
            message.channel.sendMessage("Commande non valide")
    }
});
    
bot.login(TOKEN);
