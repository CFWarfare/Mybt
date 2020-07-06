const Discord = require('discord.js')

/**
 * O evento guildMemberAdd é emitido após um membro entrar (ser adicionado em uma guild).
 */

module.exports = async (client, member) => {
  const message = new Discord.RichEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setAuthor('👤 Um membro saiu do servidor!')
    .setDescription(`${member} acabou de sair.`)
    .setFooter('2D - 2020')
    .setTimestamp()

  member.guild.channels.get(process.env.LEAVECHANNEL).send(message).catch()
}
