global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/LUlIAKUdN97GTabpDlXicZ']
global.owner = ['6281524396404', '6281524396404', '6281524396404']// Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  bsbt: 'https://bsbt-api-rest.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '48b1bd5da7bdc28e',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael'
}

// Sticker WM
global.packname = 'Kholisganteng\'Kholis'
global.author = 'Kholis'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
