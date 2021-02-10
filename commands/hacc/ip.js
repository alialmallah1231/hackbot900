module.exports = {
	name: "ip",
	code: `
$title[IP Lookup]
$description[
[Click here to get information on the IP you entered!\\](https://who.is/whois-ip/ip-address/$message[1])
	]
$argsCheck[>1;Please enter an IP!]
$onlyForChannels[804442894789640232;Please use <#804442894789640232>!]
	`
}