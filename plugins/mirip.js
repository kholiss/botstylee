let handler  = async (m, { conn }) => {

  conn.reply(m.chat,`${pickRandom(global.mirip)}`, m)

}

handler.help = ['mirip']

handler.tags = ['kerang']

handler.command = /^(iqtest)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {

  return list[Math.floor(list.length * Math.random())]

}

global.mirip = [

'Mang Oleh',

'Biawak',

'Buaya',

'Ngeteh Asw',

'Mang Garox',

'Yang Lek',
  
'kang Ngocok',

'Uzumaki Bayu',

]
