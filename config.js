//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaexTl9Dp2Q7j88VzB2v";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaexTl9Dp2Q7j88VzB2v";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f52693985ecfff6ec43f9.png";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94761238040";
global.owner = process.env.OWNER_NUMBER || "94761238040,94722549208";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0NVb1kxR242cDZZN2VUeGliSTVhcTBIQS9jQ2oyUzFSQW50U1VDWDVWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXJ3TXhXS24yU1NLVXJCemp6NFR4ZnhDSXBnbURrWVVoMzMxaTZYYjMyZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSjVOZ1BwK0RmNllZYUZneVhoSHVKMHdvSTVnajMwYldQT0dhVzdLakdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSUEM2YkN0MERTakthazEyWTIzbnQ2alBBc0Z6UHNOMTRTeDRBci9KOEhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOcEt4cEpKMnU0TzVnREZPSlRKRVFaZ1hHTGlGd3lZN0JhUlE4V1NKSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR6NTVRdlRsZkw5UTNJMmkxeXBGL1cyRDJPZDF1aWtnRFg1bVBwTEZNUWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNZaEk1Tm5GUk9paVF3c3ZkN2tVV05ZblNiTXNhbVVHRGtpRFdyY05IWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMit5cDJINWF0a0tuWXVLRFVQRnFvRWZkQlRucHVPMzFTR25PZktRaUdYOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJkejExRWlGMjdyYzRRZ0x4S1BwSWh0TG96SG0vWnN1eVI0YmhQUldBVmM5UlJWRVFJSUx6VDlFa1hEdGxna21uemREY09oM1M1TUVnaDI3QW42TUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IkczM3NaNlpKSnhheVRpVVk1dWtmSWtOTXhQYVBSUFBkdC9BUlNwaGtLbEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjI1NDkyMDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0YzQkM0MkJBODU2RENCNzFGQ0RGNDIwMzhFNjg2N0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDk4MjE3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRXdieEd0bklTNVdkYW1Cb0pVMGNjQSIsInBob25lSWQiOiIxMjRmNDBjZi1hODczLTQxMWUtOTc1ZC0yNDI2NDQ1MDhjMGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQi9vc2lMbmkzd1lrVld6WEVjak04d3pkWGU0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNPZ2F5azBYRXBTTi9zRmFQMWN0U2YwVmc1QT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIVlo3U1kxWSIsIm1lIjp7ImlkIjoiOTQ3MjI1NDkyMDg6NTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSW1hYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTY0anJjRUVJMjEwTFFHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidmJaUkVySy8zTlFSY0RYbW4yWWc0emJROVJlUFhmbEtMeGZoR0FoOFhBcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieFJPV0lHSm1odlgxbER6OHg4WVUxUXpyNGljV1pFbEJ2eFQwbUFRS3ppL25rbXFKQkMyVlJZSzlieUs2dFhlWGFzNzBiVm5BM0s1SlZJaUhCaXZLQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlVkdjJEQnE1MGtWcHJ0TVlwQ0s4Z1VlTi95WU5Hb1BTaGlaZU8yNjFYNWZ5UllmNS8yMlRJNEhnM2w3TnYvcTlicmFoZGduUHlFMjAzUCtjK2lERkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjI1NDkyMDg6NTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjIyVVJLeXY5elVFWEExNXA5bUlPTTIwUFVYajEzNVNpOFg0UmdJZkZ3TCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk4MjE2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMSXAifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐏𝐀𝐓𝐇𝐔𝐌-𝐌𝐃-🏛️😌",
  author: process.env.PACK_AUTHER || "𝐏𝐀𝐓𝐇𝐔𝐌",
  packname: process.env.PACK_NAME || "❤️‍🩹",
  botname: process.env.BOT_NAME || "𝐏𝐀𝐓𝐇𝐔𝐌 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐈𝐌𝐀𝐒𝐇𝐀,𝐏𝐀𝐓𝐇𝐔𝐌",
  errorChat: process.env.ERROR_CHAT || "94722549208",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
