const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "31738351";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_47_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlKZXBoSkZyam9SZ3BtR0tUMDJxRWpzTlFNTzhZR2FpNVlOZFVWamtvZHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVzRlRmNUQ3VDhPVUVYQWQtSTdQX0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODc5N2YzM2UtM2U3OC00OGY0LTkzMzAtNjdkZWI0MGY0OWZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDI1MyxcbiAgICAgIDY2LFxuICAgICAgMjU0LFxuICAgICAgMTYyLFxuICAgICAgMTYsXG4gICAgICAyMDMsXG4gICAgICAxMDMsXG4gICAgICAxNjIsXG4gICAgICAxMTAsXG4gICAgICAxMDIsXG4gICAgICAxOTQsXG4gICAgICA5NCxcbiAgICAgIDE1NixcbiAgICAgIDEwOSxcbiAgICAgIDIwNCxcbiAgICAgIDE5NSxcbiAgICAgIDIwNCxcbiAgICAgIDE2LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTg0LFxuICAgICAgMTg5LFxuICAgICAgMTc0LFxuICAgICAgMTMxLFxuICAgICAgMTg5LFxuICAgICAgMzYsXG4gICAgICAyNTIsXG4gICAgICAxNjIsXG4gICAgICA1LFxuICAgICAgMTc3LFxuICAgICAgMjUwLFxuICAgICAgMjA5LFxuICAgICAgNSxcbiAgICAgIDEyMCxcbiAgICAgIDEyMCxcbiAgICAgIDE5NixcbiAgICAgIDE2NSxcbiAgICAgIDIsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWOE05TDZES1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzE3MzgzNTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzc4MTYzMTgxODU1NTU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUE82bEFReWIzd3VnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhNZFFZeFZ4dXk1UlA3UFJPNWxiZWlJTWxJbjVMMFVoYzJsNjAyT2pCVEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicmlUMFdOTWU1ZnY0a29RMmM1R0Q1bkwwWDAwYnRsQ3pEWnNyYjhKU0R4SC8rbVBSY251dEFzeG52emUvSGpSSzRWY1ZKMHBpTElmUzFwUDdsbno1Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTlo2VzhFU1dyT0ZhbzN1bUFzbFd5dFMyb3VKY3FvcEoweE9OZElIc2M5QjRyZWFoUU9YQ2djZzdWWklxb1VkaXR0NzhZRzhDYVROKzdsWTQxbVBBanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5MzE3MzgzNTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDA5MDQ0NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "kelly👁",
  ownername:process.env.OWNER_NAME|| "kelly-tec",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
