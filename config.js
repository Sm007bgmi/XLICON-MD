const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "919123737179"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Asia/india'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '919123737179' 
global.devs = '919123737179';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0s5TEI0aDVUNUtkT2R5RnJhZlVuakNDVHg3K3ZxVlA3WENCK3lCMUIyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVljaWZVVnRxbWtlSXpPQmpQOXVpMlBvMWE3OCtQQW5hUU91czFiWFNBST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSGhmTnh5UHY5bFdvMUw0QmxseUx2bkFZVmlmeFNjNFhLc3ZBc3VHbWtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEQWdNRlpUMk81ZXUyRW5maEhXdlJqQitCR1hwd1VscUhnMzdpRmZUWUVzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOTzFnOHJ3NzBFTUoxdmJRN1ZiUmRxSTdEbitxbGl4SzJHL3JUTWQ0M1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5iSzdNcGZkRFRZMWlHV0d2WEJURlpBNCtrR0l0WnJ4VnlTbGxOdHM4RHc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdno1UnZkQzNvY1YzUHRlejdiSVZBS3ppTDFNdkxsUjRYMjl4dEwvUkduT1pMejZqUGg5RUcrbkFKdUp0QzRCYkFROGIrMXFBY1A2c2ZGQVIrcWxpUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNiwiYWR2U2VjcmV0S2V5IjoiOFpIaTVFbEdIMHFTdTZOUUVYNjUrV3dUY2w1VTRkR3A4SDZ5b3F4M2tldz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX25jRS1hSkNRVnEzWEtGN3FSR2V1USIsInBob25lSWQiOiJkN2I5OWQwNy00YWM3LTRmMGUtYWQxMC02NGMwY2QzODkwZDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0M3TWxMODlrRTkrdGR4Z2NmNVplcGlyNXRVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyWE9hWEFaWk9IOThMblJtbnRNMlpXN2gvMFE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOVzF4czBHRUxhaTZxc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9CMGlzVFpLaHVJbUZlZXA3czBNSVRFSHhJbXRVeU5NUDRPdnRZdXBVR0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpaTkt6dXRQeXJMbUExMGMyNG5jczNLQ0hGcXpBa0hHMW5hRUR0dGZoamlMTlQ4SzMzVFZvdjl0NVJQR1U3UGdxNElnWG42NVhyTStTUXFCT20vaURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtaTJwZUVWbWppREZsNURUTGQycDQ4VTdjWDFDWFFkb0NUTElaTnNDQ1d4eWwxdzMrRzErUWpMUXM3UDcyYzErNUQreXlzcWUrd0pxRVdNdHI4elFqdz09In0sIm1lIjp7ImlkIjoiOTE5MTIzNzM3MTc5OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuWNmOOCuOODrSDjgYvjgb7jganwn5G94p2k77iPIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTEyMzczNzE3OToxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUZ2RJckUyU29iaUpoWG5xZTdORENFeEI4U0pyVk1qVEQrRHI3V0xxVkJpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAyNTMxMzg1fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Sumit Gojo',
  packname:  process.env.PACK_NAME || 'Sumit Gojo',
   
  botname:   process.env.BOT_NAME === undefined ? "Gojo" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Sumitofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'gud' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '92' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
