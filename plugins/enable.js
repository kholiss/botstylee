let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let user = global.DATABASE._data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'antitoxic':
      chat.antiToxic = !isEnable
      break
    case 'antidelete':
    case 'delete':
      chat.delete = !isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      chat.antiLink = isEnable
      break
    case 'antivirtext':
      chat.antiVirtext = isEnable
      break
    case 'antitroli':
      chat.antiTroli = isEnable
      break
    case 'antispam':
      chat.antiSpam = isEnable
      break
    case 'antierror':
      chat.antiError = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    default:
      return m.reply(`
List option: welcome | delete | antitoxic | antilink | antivirtext | antitroli | antispam | antierror | autolevelup

Contoh:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
  }
  m.reply(`
*${type}* berhasil di *${isEnable ? 'nyala' : 'mati'}kan* ${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i

handler.admin = true

module.exports = handler
