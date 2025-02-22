const db = require("old-wio.db")
const { MessageEmbed } = require("discord.js");
const { measureMemory } = require("vm");

module.exports = {
    config: {
        name: "hackban",
        aliases: ['forceban'],
        category: 'mod',
        usage: "[hackban || forceban] <user ID>",
    },

    run: async (bot, message, args) => {

        if (!message.channel.permissionsFor(message.member).has("BAN_MEMBERS") && !ownerID.includes(message.author.id)) return;

        const target = args[0];
        if (isNaN(target)) return message.reply(`Please specify an ID`);

        const reason = args.splice(1, args.length).join(' ');

        try {
            message.guild.members.ban(target, { reason: reason.length < 1 ? 'No reason supplied.' : reason });
            const embed2 = new MessageEmbed()
                .setColor('45BB8A')
                .setDescription("**They were successfully banned. User was not notified!**");
            await message.channel.send(embed2);
            const channel = db.fetch(`modlog_${message.guild.id}`);
            if (!channel) return;
            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor('EF4949')
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "ban")
                .addField("**ID**", `${target}`)
                .addField("**Banned By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)

        } catch (error) { console.log(error) }
    }
}
