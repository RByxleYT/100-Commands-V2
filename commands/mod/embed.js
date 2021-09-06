const Discord = require('discord.js')

module.exports = {
	config: {
		name: 'embed',
		category: 'mod',
		description: 'Created a embed',
		accessableby: 'Administrator',
		usage: 'embed <Title> <Color> <Text>',
		aliases: []
	},
	run: async (bot, message, args) => {
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") && !ownerID.includes(message.author.id)) return;
                let title = args[0]
                let color = args[1]
                let description = args.slice(2).join(" ")
                const error = new Discord.MessageEmbed()
                    .setColor('EF4949')
                    .setTitle('**<:Decline:864080227738320896> ERROR INVALID ARGS**')
                    .setDescription('`Helper, (Your Text(Only 1 Word), (Color), (Description)`')
    
                if (!title) return message.channel.send(error)
                if (!color) return message.channel.send(error)
                if (!description) return message.channel.send(error)
    
    
                const embed = new Discord.MessageEmbed()
                    .setTitle(`**${title}**`)
                    .setColor(color)
                    .setDescription(description)
                    .setFooter(`Embed created by ${message.author.username}`)
                message.delete()
                message.channel.send(embed)
    }
}
