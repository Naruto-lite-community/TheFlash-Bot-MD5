import fetch 'node-fetch'
let handler = async (m, { conn, text }) => {
    let groups = Object.keys(await conn.groupFetchAllParticipating())
    m.reply(`_mengirim pesan siaran ke ${groups.length} grup_\nestimasi selesai ${groups.length * 1.5} detik`)
    for (let id of groups) {
        let bg = img13
        await conn.delay(1500)
        await conn.sendButtonLoc(id, await (await fetch(bg)).buffer(), text, wm, 'broadcast', 'broadcast')
    }
    m.reply('*✅*')
}
handler.help = ['bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(loc)$/i

handler.owner = true

export default handler



/*import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) { 
await delay(5 * 5000)
conn.sendButton(id, `*╭━━[ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 | 𝙉𝙊𝙏𝙄𝘾𝙀 ]━━━⬣*\n*┃*\n*┃💌* ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`, '✅ *𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🎁 𝙄𝙣𝙛𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', '.cuentasgb'],['🐈 𝙈𝙚𝙣𝙪', '.menu']], false, {
contextInfo: { externalAdReply: {
title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gata_dios`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ✅ *El mensaje fue enviado a ${chatsall.length} Chats Totales*\n*Es posible que no se haya enviado a todos los Chats Totales. Disculpe.*\n\n✅ *The message was sent to ${chatsall.length} Totals Chats*\n*May not have been sent to all Totals Chats. Excuse me.*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i
handler.rowner = true
handler.exp = 500
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))*/
