const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "poll",
        aliases: [""],
        description: "Start a simple poll in the server",
        category: "utility",
        usage: "poll <question>",
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [MANAGE_GUILD]**");

        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor('45BB8A')
            .setTitle(`Poll For ${message.guild.name} Sever`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react('<:Accepted:864080263172718603>');
        await msg.react('<:Decline:864080227738320896>');

        message.delete({ timeout: 1000 });
    }
}
