
let { MessageType, mentionedJid } = require("@adiwajshing/baileys")

module.exports = {
name: ["ohidetag"],
type: ['owner'],
description: "menendang member grup(khusus Owner)",
owner: true,
utilisation: global.userbot.prefix+ "ohidetag",

async execute(m) {
let { conn, text } = data
if (!text) return m.reply('teks untuk hidetag?')

 conn.fetchGroupMetadataFromWA(m.chat).then(({ participants }) => {
let ane = []
	       for (let i of participants){
	       ane.push(i.jid)
}
conn.sendMessage(m.chat, text, MessageType.text, { quoted: m, contextInfo: {"mentionedJid": ane}})
})
}
}
