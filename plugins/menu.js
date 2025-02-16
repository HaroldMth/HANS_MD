const { stdTimeFunctions } = require('pino');
const { cmd, commands } = require('../command');
const config = require('../config');
const functions = require('../lib/functions');

function getCurrentDate() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to get current uptime dynamically
function getUptime() {
    let totalSeconds = process.uptime();
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
}


const uptime = getUptime();
const currentDate = getCurrentDate();
const currentTime = getCurrentTime();

module.exports = { getUptime, getCurrentDate, getCurrentTime };

module.exports = { getCurrentDate, currentDate, getCurrentTime, currentTime };


cmd({
    pattern: "menu",
    desc: "Display the bot menu",
    category: "menu",
    react: "📜",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        const menuText = `
╔═════════════════╗
║ 🚀 𝓗𝓐𝓝𝓢 𝓑𝓨𝓣𝓔 𝓜𝓓 🚀           
╠══════════════════╣
║ 𝓗𝓮𝓵𝓵𝓸, 𝓭𝓮𝓪𝓻 *${pushname}* 🎩
║ 📅 𝓓𝓪𝓽𝓮: *${getCurrentDate()}*
║ ⏰ 𝓣𝓲𝓶𝓮: *${getCurrentTime()}*
║ ⏳ 𝓤𝓹𝓽𝓲𝓶𝓮: *${getUptime()}*
║ 👑 𝓞𝔀𝓷𝓮𝓻: *${config.OWNER_NAME}*
║ 💻 𝓜𝓸𝓭𝓮: *${config.MODE}*
╚══════════════════╝

🛠 *『 𝓜𝓐𝓘𝓝 𝓜𝓔𝓝𝓤 』* 🛠
╭──⟪📌⟫──────────
┃ ✦ .alive
┃ ✦ .menu
┃ ✦ .ping
┃ ✦ .system
┃ ✦ .help
╰────────────────

📥 *『 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓 𝓜𝓔𝓝𝓤 』* 📥
╭──⟪🎶⟫──────────
┃ 🎵 .song <query>
┃ 🎥 .video <query>
┃ 📷 .fb <link>
┃ 🔗 .mediafire <link>
┃ 📸 .ig <link>
┃ 📁 .mfire <url>
┃ 📁 .gdrive <url>
│ 🐦 .tweet <url>         
│ 🗣️ .speak <query>       
│ 🎼 .lyrics <song|artist> 
│ 🌦  .weather <location>              
│ 🐙 .gitclone  <url>         
╰─✧───────────────✧─╯

🔍 *『 𝓢𝓔𝓐𝓡𝓒𝓗 𝓜𝓔𝓝𝓤 』* 🔍
╭──⟪🔎⟫──────────
┃ 🔎 .yts <query>
┃ 🖼️ .img <query>
╰────────────────

👥 *『 𝓖𝓡𝓞𝓤𝓟 𝓜𝓔Ｎ𝓤 』* 👥  
╭──⟪📢⟫──────────  
┃ 🔗 .grouplink  
┃ ❌ .kickall  
┃ ❌ .kickall2  
┃ ❌ .kickall3  
┃ ➕ .add  
┃ ➖ .remove  
┃ 🚪 .kick  
┃ ⬆️ .promote  
┃ ⬇️ .demote  
┃ 🚫 .dismiss  
┃ ↩️ .revoke  
┃ 👋 .setgoodbye  
┃ 💬 .setwelcome  
┃ 🗑️ .delete  
┃ 🖼️ .getpic  
┃ ℹ️ .ginfo  
┃ 💨 .disappear on  
┃ 🌬️ .disappear off  
┃ ⏳ .disappear 7D,24H  
┃ 📥 .allreq  
┃ ✏️ .updategname  
┃ 📝 .updategdesc  
┃ 🤝 .joinrequests  
┃ 📤 .senddm  
┃ 🚶 .nikal  
┃ 🔇 .mute  
┃ 🔊 .unmute  
┃ 🔒 .lockgc  
┃ 🔓 .unlockgc  
┃ 📩 .invite  
┃ 🏷️ .tag  
┃ 🙈 .hidetag  
┃ 📣 .tagall  
┃ 👑 .tagadmins  
╰────────────────

👑 *『 𝓞𝓦𝓝𝓔𝓡 𝓜𝓔𝓝𝓤 』* 👑
╭──⟪🛠⟫──────────
┃ 📴 .shutdown
┃ 🖼️ .setpp
┃ ⛔ .block
┃ ✅ .unblock
┃ 🗑️ .clearchats
┃ 🔄 .restart
┃ 📢 .broadcast
╰────────────────

🛠 *『 𝓣𝓞𝓞𝓛𝓢 𝓜𝓔𝓝𝓤 』* 🛠
╭──⟪🔧⟫──────────
┃ 🤖 .ai <query>
┃ 📰 .news <query>
┃ 🔓 .hack
┃ 🌍 .trt <info>
┃ 🔗 .shorten <url>
┃ 💡 .fact
┃ 🎨 .dalle <query>
┃ 📸 .ig <url>
┃ 📌 .pint <query>
┃ 🤬 .insult 
┃ 😂 .meme
┃ 🔗 .url
┃ 🎵 .ringtone <query>
╰────────────────

🕵️ *『 𝓢𝓣𝓐𝓛𝓚 𝓜𝓔𝓝𝓤 』* 🕵️
╭──⟪🔍⟫──────────
┃ 🔎 .ghstalk <username>
┃ 🔍 .wastalk <link>
╰────────────────

📖 *『 𝓡𝓔𝓛𝓘𝓖𝓘𝓞𝓝 𝓜𝓔𝓝𝓤 』* 📖
╭──⟪📖⟫──────────
┃ 📖 .bible <chapter>:<verse>
┃ 🕌 .quran <surah number>
╰────────────────

╔══════════════════════════╗
║ 🚀 *𝓟𝓞𝓦𝓔𝓡𝓔𝓓 𝓑𝓨 𝓗𝓐𝓝𝓢 𝓣𝓔𝓒𝓗* 🚀
║ 🔗 *𝓙𝓞𝓘𝓝 𝓞𝓤𝓡 𝓦𝓗𝓐𝓣𝓢𝓐𝓟𝓟 𝓒𝓗𝓐𝓝𝓝𝓔𝓛
║  https://whatsapp.com/channel/0029VaZDIdxDTkKB4JSWUk1O
║ *Type .repo to get bot info and deply*
╚══════════════════════════╝`;

        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/FLSgNhW9/Free.png` }, 
            caption: menuText 
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

