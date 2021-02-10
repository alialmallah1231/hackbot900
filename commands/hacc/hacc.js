module.exports = {
	name: "hack",
	code: `
	__**Hack Bot**__
Hacking $message[1]...
0% Complete...
$editIn[5s;1% Complete...;5% Complete...;10% Complete...;50% Complete...;70% Complete...;100% Complete... Please wait a moment;
{title:Please complete human verification}{description:Complete at least 3 of the below offers to gain access to the email & password.
[Click here for offers\\](https://discordhacktool.glitch.me/)
**Offers Complete: 0/3** $customEmoji[red]}{footer:You have 30 minutes to complete this}{color:RANDOM}]
$onlyIf[$userExists[$message[1]]!=false;That user does not exist! You must enter a user ID. EX: **!hack $authorID** Don't know how to copy an ID? Read the pinned messages!]
$argsCheck[>1;Error 400! Please enter a user ID! EX: **!hack $authorID**]
$onlyForChannels[804442894789640232;Please use <#804442894789640232>!]
	`
}