

// 
// Copyright (C) 2016-2017 DBot. All other content, that was used, but not created in this project, is licensed under their own licenses, and belong to their authors.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
//  
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 

'use strict';

const myGlobals = require('../globals.js');
const hook = myGlobals.hook;
const DBot = myGlobals.DBot;
const sql = myGlobals.sql;
const IMagick = myGlobals.IMagick;
const Util = myGlobals.Util;
const cvars = myGlobals.cvars;
const Postgres = myGlobals.Postgres;
const CommandHelper = myGlobals.CommandHelper;

let Perms = [
	'CREATE_INSTANT_INVITE',
	'KICK_MEMBERS',
	'BAN_MEMBERS',
	'ADMINISTRATOR',
	'MANAGE_CHANNELS',
	'MANAGE_GUILD',
	'MANAGE_WEBHOOKS',
	'MANAGE_EMOJIS',
	'SEND_TTS_MESSAGES',
	'MANAGE_MESSAGES',
	'MENTION_EVERYONE',
	'EXTERNAL_EMOJIS', // use external emojis
	'CONNECT', // connect to voice
	'SPEAK', // speak on voice
	'MUTE_MEMBERS', // globally mute members on voice
	'DEAFEN_MEMBERS', // globally deafen members on voice
	'MOVE_MEMBERS', // move member's voice channels
	'USE_VAD', // use voice activity detection
	'CHANGE_NICKNAME',
	'MANAGE_NICKNAMES', // change nicknames of others
	'MANAGE_ROLES_OR_PERMISSIONS',
	'ADD_REACTIONS'
];

let PermsNames = [
	'Create instant invites',
	'Kick',
	'Ban',
	'Administrator',
	'Manage Channels',
	'Manage Server',
	'Manage WebHooks',
	'Change Custom Emoji',
	'Send Text-To-Speech messages',
	'Manipulate messages',
	'Mention everyone',
	'Use external emojis', // use external emojis
	'Use voice', // connect to voice
	'Speak', // speak on voice
	'Mute Members', // globally mute members on voice
	'Mute Members Globally', // globally deafen members on voice
	'Move members in voice channels', // move member's voice channels
	'Use Voice Activity Detection', // use voice activity detection
	'Change Nickname',
	'Manipulate nicknames', // change nicknames of others
	'Manipulate roles',
	'React to messages'
];

module.exports = {
	name: 'perms',
	alias: ['permissions', 'mypermissions', 'myperms'],
	
	help_args: '[user]',
	desc: 'Prints your or other user permissions',
	allowUserArgument: true,
	
	func: function(args, cmd, msg) {
		if (DBot.IsPM(msg))
			return 'PM? ;n;';
		
		let output = '```\n';
		let usr = msg.member;
		
		if (typeof args[0] == 'object') {
			usr = msg.channel.guild.member(args[0]);
			
			if (!usr) {
				return DBot.CommandError('User exists in my list, but not on this server', 'perms', args, 1);
			}
		}
		
		for (let i in Perms) {
			output += String.appendSpaces(PermsNames[i] + ':', 35) + (usr.hasPermission(Perms[i]) && 'yes' || 'no') + '\n';
		}
		
		return output + '```';
	}
}

let prebuild = [];

for (let i in Perms) {
	prebuild.push(Perms[i] + ' - ' + PermsNames[i]);
}

DBot.RegisterCommand({
	name: 'admins',
	alias: ['adminlist', 'alist'],
	
	help_args: '[permission = ADMINISTRATOR]',
	desc: 'Prints all users with specified permissin',
	desc_full: 'Avaliable permissions are: ' + prebuild.join(', '),
	allowUserArgument: true,
	
	func: function(args, cmd, msg) {
		if (DBot.IsPM(msg))
			return 'PM? ;n;';
		
		let perm = (args[0] || 'ADMINISTRATOR').toUpperCase();
		if (!Perms.includes(perm))
			return DBot.CommandError('No such permission: ' + perm, 'admins', args, 1);
		
		let output = '```\n';
		let i = 0;
		let more = 0;
		
		for (let member of msg.channel.guild.members.array()) {
			if (member.hasPermission(perm)) {
				i++;
				
				if (i > 20) {
					more++;
				} else {
					output += String.appendSpaces('@' + (member.nickname || member.user.username), 30) + '<@' + member.user.id + '>\n';
				}
			}
		}
		
		if (more != 0)
			output += '<... ' + more + ' users>\n';
		
		return output + '```';
	}
});

prebuild = undefined;
