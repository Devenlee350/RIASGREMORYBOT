//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "devenleekudzayi@gmail.com";
global.location = "Chitungwiza, Zimbabwe";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github = process.env.GITHUB || "https://github.com/Devenlee250/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "263719765023";
global.sudo = process.env.SUDO || "263719765023,263784562833";
global.owner = process.env.OWNER_NUMBER || "263784562833,263719765023";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pJSlkyaFhNdEdZTkQzbWlmY0xVUG1Sc1dEM2ZhM1NPaVVBY3dzclVWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHU3RCt4cHRVTmIvdE02b3dPMWFNOGRMT21IbnJKSGNxeVRrelJtUW0ybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTFlYNUlmTXRvcU9ocDRCendOaG9BZWgrUi9xcnZqbEpHenBhVlZJQmtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5Wks1UnQvYnBWakhhZDZ4SkhwNURFNnRvN0RpZ2xmTHRvZ2ZzSkFvb1VNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHM2VhVzBnTlNTQ2ZhNkJoVm1xUkhiV254TDI5V3Rudk1LdnYrSndnSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjllQ21CaVZWNnZaYi94b3BBYUIyc21jQjJKK25vZ01CRTdrQUlsZk1lRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Q1NXlraXJSa3psRDJWYjJzWjFFb1lKbzIwSlFUOXEvTEJJek9URHlHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm1ISWU2WmU5SUh2cmRnZXc1SThPdm54a2k2QkZqeFZSVE0rMFZrSFVpZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9XSGpFZEREaDBBREhDaGVKNTFqOWdZWVExQjVoNldXaFJYQk83Y1oyZGZUQUZaVnNiZjJneldyNHpZY3piMnJVTm5MMGNEQU9XMitDT0NtVjRFcmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJDa2JzRFVkSTBtNXliUERHRTZ5RTJsY1pkSU5hYmc2RzdTN1I2eG9Kd3pRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4NDU2MjgzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQzk2OTM0OUY1NTQxQTJCRDQzRDgxNjg5NzRGQjFFOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MDU5Nzk3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjSkZqdGdzOVIwQ01ST0Q1NTNlMEdBIiwicGhvbmVJZCI6IjNiN2RjZWZkLTRkMGQtNGI3YS1hYjZhLThkZDc4NzIwMDYwMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSE1oQ1pNeFlzVFBMTWRGOVQ3UXNzc2dJSTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXBLdFB5WHoyMG5hUVZ3eW4rYmtmcW1KWjZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFSQ00xVENMIiwibWUiOnsiaWQiOiIyNjM3ODQ1NjI4MzM6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLimqHwn5SlU1RSSUtFUkJPWfCflKXimqEgIDIuMCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjZqMTBnUWdxR010Z1lZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoicm5EMDRLSzlmZFJrZ1dUaVRLZzhpbDd0U0RJWkU1Ni95cEl3cG44aHNoMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaWdTUldSODBwUjZoazlQWW4rZGo4SVNKTUEwaFc2UEwwL2xSS3hRU25BdnYvMUp6Z0xOUncyb1hzeXRVVHd4eVZkY25nWWV0Vmk1ZzUxWFc4b0R0Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6InFQV3ZHdnBNOVpEYlVBNEZSbUlDSGNWUk9qMG03Rno0dU1xRm0rR29BSElYcC80dUxURzZLR2JLWXB0R3JmR040RHFXUUlJRG8vWUsrS1ZzZ3ZjTWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg0NTYyODMzOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTV3OU9DaXZYM1VaSUZrNGt5b1BJcGU3VWd5R1JPZXY4cVNNS1ovSWJJZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA1OTc5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFId3cifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 STRIKER𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || " STRIKERBOY ᴍᴅ",
  packname: process.env.PACK_NAME || " STRIKERBOY 𝗠𝗗",
  botname: process.env.BOT_NAME || " STRIKERBOY-MD V2",
  ownername: process.env.OWNER_NAME || " STRIKERBOY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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
