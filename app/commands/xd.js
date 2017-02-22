
/* global DBot */

module.exports = {
	name: 'xd',
	
	help_args: '<phrase>',
	desc: 'XD',
	
	func: function(args, cmd, msg) {
		if (args.length !== 3)
			return 'You need exactly 3 arguments';
		
		for (const i in args) {
			const arg = args[i];
			if (arg.length > 10)
				return DBot.CommandError('Argument is too long', 'xd', args, i + 1);
		}
		
		let middleSpaces = 11;
		let preMiddleSpaces = 7;
		
		if (args[0].length < 3) {
			middleSpaces = 11 - (3 - args[0].length);
		} else if (args[0].length > 3) {
			preMiddleSpaces += Math.floor((args[0].length - 3) / 3) + 1;
			middleSpaces += Math.floor((args[0].length - 3) / 2 + .5);
		}
		
		let build = `${args[0]}           ${args[0]}    ${args[1]} ${args[2]}
  ${args[0]}       ${args[0]}      ${args[1]}    ${args[2]}
    ${args[0]}   ${args[0]}        ${args[1]}     ${args[2]}
${String.spaces(preMiddleSpaces)}${args[0]}${String.spaces(middleSpaces)}${args[1]}     ${args[2]}
     ${args[0]} ${args[0]}         ${args[1]}     ${args[2]}
  ${args[0]}       ${args[0]}      ${args[1]}   ${args[2]}
${args[0]}           ${args[0]}    ${args[1]} ${args[2]}`;
		
		return '```\n' + build + '\n```';
	}
};
