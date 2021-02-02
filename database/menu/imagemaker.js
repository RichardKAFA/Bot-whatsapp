
bruxinhok
/
Bot-whatsapp
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Bot-whatsapp/database/menu/imagemaker.js
@bruxinhok
bruxinhok Add files via upload
 1 contributor
37 lines (36 sloc)  986 Bytes
 
const imagemaker = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」
◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *IMAGE MAKER*
  │
  ├─ ❏ ${prefix}bpink
  ├─ ❏ ${prefix}snowwrite
  ├─ ❏ ${prefix}3dtext
  ├─ ❏ ${prefix}firetext
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}shadow
  ├─ ❏ ${prefix}burnpaper
  ├─ ❏ ${prefix}coffee
  ├─ ❏ ${prefix}lovepaper
  ├─ ❏ ${prefix}woodblock
  ├─ ❏ ${prefix}qowheart
  ├─ ❏ ${prefix}mutgrass
  ├─ ❏ ${prefix}undergocean
  ├─ ❏ ${prefix}woodenboards
  ├─ ❏ ${prefix}wolfmetal
  ├─ ❏ ${prefix}metalictglow
  ├─ ❏ ${prefix}8bit
  ├─ ❏ ${prefix}herrypotter
  └─ ❏ ${prefix}quotemaker`
}
exports.imagemaker = imagemaker
