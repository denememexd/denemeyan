const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('**BlaxkLion Bilgi**\n**---------------------** \nMerhaba Ben BLBBot \n**---------------------**\nEglence Icin Tasarlanmadım \n**---------------------**\nHizmet Icin Tasarlandim');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Botun Hakkında Bilgi.',
  usage: 'bilgi'
};
