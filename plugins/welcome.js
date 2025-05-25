const { cmd } = require('../command');

cmd({
    pattern: "welcome",
    desc: "Annonce une bienvenue avec un texte prédéfini",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {

    const welcomeText = `*_▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩_*
*_🔶SHINOBI STORM RP🎮_*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🥇Fiche Shinobi Ultimate League🏆*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
_▲Pseudo👤:_

_▲DIVISION⚪️:_

_▲BOURSE💰: *00🪙🔶*_ 

_▲STARS⭐️ : *00⭐️*_

_▲Card de Réduction 🎟: *0 🎟_*
▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
_*🔢Records*:_ 
_0Victoires🏆/ 0Défaite😭_
_*🏆 Points*: 00🌟_ 

_RANG *SUL🏅*:_
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*_🛍🛒ACHATS CARDS: _*
▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰
*_▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩▢▩_*

`;

    try {
        // Envoi du message de bienvenue
        return await conn.sendMessage(from, { text: welcomeText }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message de bienvenue:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message de bienvenue. Réessaie plus tard.");
    }
});
