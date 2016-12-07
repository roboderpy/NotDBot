
module.exports = {
	name: 'hash',
	alias: ['md5'],
	
	argNeeded: true,
	
	help_args: '<text>',
	desc: 'Posts a MD5 checksumm of string',
	
	func: function(args, cmd, msg) {
		return DBot.HashString5(cmd);
	}
}

DBot.RegisterCommand({
	name: 'hash1',
	alias: ['sha1'],
	
	argNeeded: true,
	
	help_args: '<text>',
	desc: 'Posts a SHA1 checksumm of string',
	
	func: function(args, cmd, msg) {
		return DBot.HashString1(cmd);
	}
});

DBot.RegisterCommand({
	name: 'hash512',
	alias: ['sha512'],
	
	argNeeded: true,
	
	help_args: '<text>',
	desc: 'Posts a SHA512 checksumm of string',
	
	func: function(args, cmd, msg) {
		return DBot.HashString512(cmd);
	}
});

DBot.RegisterCommand({
	name: 'hash256',
	alias: ['sha256'],
	
	argNeeded: true,
	
	help_args: '<text>',
	desc: 'Posts a SHA256 checksumm of string',
	
	func: function(args, cmd, msg) {
		return DBot.HashString(cmd);
	}
});