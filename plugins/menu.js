const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "basics",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        const config = await readEnv();

        // Initialisation des sections spécifiques du menu
        let menu = {
            basics: '',
            adventure: '',
            cartes: '',
            cards: ''
        };

  for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

   // Construire le message du menu avec les catégories spécifiques
        let madeMenu = `
[ 𝑺𝑻𝑶𝑹𝑴 𝑹𝑷 ]
━━━━━━━━━━━━━❒        
│𝑶𝑾𝑵𝑬𝑹 :  ${pushname}
│𝑷𝑹𝑬𝑭𝑰𝑿𝑬 : ${config.PREFIX}
│𝑪𝑶𝑴𝑴𝑨𝑵𝑫𝑬𝑺 : ${commands.length}
│𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑷𝑬 : 𝑾𝑨𝑺𝑼𝑲𝑬 𝑫 𝑲𝑨𝑴𝑨𝑫𝑶
╰━━━━━━━━━━━━━❒
 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑼𝑬 𝑱𝑬𝑼̂𝑵𝑬 𝑵𝑰𝑵𝑱𝑨 😁
╰━━━━━━━━━━━━━❒        
 ©𝑺𝑻𝑶𝑹𝑴 𝑹𝑶̂𝑳𝑬𝑺 𝑷𝑳𝑨𝒀
╰━━━━━━━━━━━━━❒

> *BASICS* 😜
 ${menu.basics}
╰━━━━━━━━━━━━━❒
> *ADVENTURE* 🎮
 ${menu.adventure}
╰━━━━━━━━━━━━━❒
> *OWNER* 💫
 ${menu.story}
╰━━━━━━━━━━━━━❒
> *CARDS* 👤
 ${menu.profile}
╰━━━━━━━━━━━━━❒
𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 𝑲𝑨𝑴𝑨𝑫𝑶
        `;

        // Envoyer le menu en message
        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
