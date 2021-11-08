const Discord = require('discord.js')
const token = require('./token.json')
const bot = new Discord.Client()
const prefix = "!"


bot.on('message', function (rules) {
    if (rules.content.startsWith(prefix + 'regles')) {
        rules.channel.send(`@everyone\nBienvenue sur ce serveur de tests de bot discord.\n` +
            `Dans celui-ci, vous pourrez développer et entrainer vos bots dans la limite du raisonnable bien sûr !` +
            `D\'autres channels de détente sont aussi mis à votre disposition.\n` +
            `(!) SERVEUR EN COURS DE DEVELOPPEMENT (!)\n\n` +
            `Règle 1 : Respectez les autres utilisateurs Discord. Les insultes ne sont pas permises.\n` +
            `Si vous voulez vous disputer, ce sera soit en MP, soit une discussion à l\'amiable et pas autre chose.` +
            `Si des insultes sortent, vous serez avertis. Mais si ça fait de trop, CE SERA LE BAN !!\n\n` +
            `Règle 2: Pas de discours à caractère haineux, raciste, antisémite etc. Le résultat sera un BAN DEF.\n\n` +
            `Règle 3: Pas de flood dans les channels.\n\n` +
            `Règle 4: Les liens sont tolérés dans certains channels, pas tous. Faites attention aux avertissements et au ban.`)
    }
})

bot.on('message', function (message) {
    if (message.content.startsWith(prefix + 'discord')) {
        message.channel.send(`Voici le lien du serveur Discord !!\n` +
        `https://discord.gg/NwYFJag9WM`)
    }
})

bot.on('message', function (message) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        if (message.author.id === "432610292342587392" && message.channel.id !== "901521796816310372") {
            message.delete();
        }
    }
})

bot.on('message', function (message) {
    if (message.content.startsWith(prefix + 'clear') || message.content.startsWith('!c')) {
        message.delete();
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            let args = message.content.trim().split(" ")

            if (args[1]) {
                if (!isNaN(args[1]) && (args[1] >= 1) && (args[1] <= 99)) {
                    message.channel.bulkDelete(args[1]).then();
                }
            }
        }
    }
})

bot.login(token.token)