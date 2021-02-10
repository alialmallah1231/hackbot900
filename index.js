
const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: process.env.TOKEN, 
prefix: "!",
mobile: true
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}

bot.awaitedCommand({
  name: "ticketnew",
  code: `
 $newTicket[$username-$discriminator;<@$authorID>{title:Ticket opened}{description:Hello <@$authorID>! This is your ticket. Please state your problem and wait for a staff member to assist you!}{color:RANDOM};807478424889196575;no;Error!]
 $cooldown[1h;$sendDM[$authorID;You must wait before opening another ticket!]]
 `
 })

 bot.command({
	name: "ticketgo",
	code: `
	$reactionCollector[809084920864964638;everyone;24000m;🎟;ticketnew;yes]
	$textSplit[$sendMessage[Done!;yes];]
	`
})