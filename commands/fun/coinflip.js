const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "coinflip",
        aliases: ['cf', 'coin', 'flip'],
        category: 'fun',
        description: 'flips a coin',
        usage: 'coinflip',
    },
    run: async (bot, message, args) => {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'Heads';
        else result = 'Tails';
        const embed = new MessageEmbed()
            .setColor('45BB8A')
            .setDescription(`**${message.member.displayName} Flipped ${result}**!`)
        message.channel.send(embed);
    }
};
