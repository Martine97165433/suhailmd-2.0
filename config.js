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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_08_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyLFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0LFxuICAgICAgICA1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDczLFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODksXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwialdxc0plcjAybzRIWUMrYzY3MWVrNS9hMXFWSjhmZWw0bFdibGo1aTBTMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGtUT0p5ZFJSb0dFMHhHdzl2RzhMQVwiLFxuICBcInBob25lSWRcIjogXCI1MGM2ZTI4Yy1lYWFjLTQ2NzUtYjY2MS05OTVjZWNkZmIxMzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMjM1LFxuICAgICAgMjM5LFxuICAgICAgMTM4LFxuICAgICAgMTcwLFxuICAgICAgMTc2LFxuICAgICAgMzksXG4gICAgICAxNzMsXG4gICAgICAyMDcsXG4gICAgICA1MSxcbiAgICAgIDc2LFxuICAgICAgMTc4LFxuICAgICAgMjIxLFxuICAgICAgMjA5LFxuICAgICAgODgsXG4gICAgICAxNzAsXG4gICAgICA0OCxcbiAgICAgIDExOSxcbiAgICAgIDEyOCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDIwOSxcbiAgICAgIDIxOSxcbiAgICAgIDE3MCxcbiAgICAgIDExNCxcbiAgICAgIDE3OCxcbiAgICAgIDQ3LFxuICAgICAgNDksXG4gICAgICAxNDMsXG4gICAgICA4OCxcbiAgICAgIDIyMixcbiAgICAgIDYwLFxuICAgICAgMTgwLFxuICAgICAgMTEyLFxuICAgICAgNTUsXG4gICAgICAxODIsXG4gICAgICAyNyxcbiAgICAgIDIwNCxcbiAgICAgIDI0MyxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxMTNRMkszUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzE3MzgzNTE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3ODE2MzE4MTg1NTU1OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xuTzZsQVFwWm1RdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSE1kUVl4Vnh1eTVSUDdQUk81bGJlaUlNbEluNUwwVWhjMmw2MDJPakJUST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzZ1lreHhKZW9sSFp4cjE2RnhBb01WaHViWE1HSm5IU2FRWlZZTXdWc2ZsN2VLVGNhbTk4UU9kdUgrc1FBL2V1QitXQzI5S1ovMzZmZUNXVVBMZ3VCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiZmdCMVVFbjFrY21NRDJRdGtnS0JPT1RCYzBIeWFGdnhKZ295aVRKcmx6QTI1clFuL2FqWHFLSFlEOG5WRjE1OTFjWHR0Y1h4M0hha2VVb1U4UUdqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzMTczODM1MToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDYxMDA5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE4blwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQThuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUVp4RjJmSG9MNWpQZk45czd5c0oya2EzVDY2M0JLWW54S0xnVFFEbW1mTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjk1MTg5MDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
