let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {

if (!(isAdmin || isOwner)) {

global.dfail('admin', m, conn)

throw false

}

let pesan = args.join` `

let oi = `🤳 Instagram.com/n4mecit4_bc ${pesan}`

let teks = `╭━〔✨αтєη¢ιÓη ρυтιтσѕ✨ \n\n${oi}\n\n *🫶➢ 𝔼𝕋𝕀ℚ𝕌𝔼𝕋𝔸𝕊*\n`  

for (let mem of participants) {

teks += `┃⊹៚@${mem.id.split('@')[0]}\n`}

teks += `╰━━爪丨Ҝㄩ━━⬣ \n\n ✨мι мαмι єѕ η4мє¢ιт4😈✨`

conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )

}

handler.help = ['tagall <mesaje>','invocar <mesaje>']

handler.tags = ['group']

handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i

handler.admin = true

handler.group = true

handler.register = true

export default handler



















