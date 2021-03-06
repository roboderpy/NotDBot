

/* global FCVAR_NOTNULL, FCVAR_BOOLONLY */

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

const myGlobals = require('./globals.js');
const hook = myGlobals.hook;
const DBot = myGlobals.DBot;
const sql = myGlobals.sql;
const IMagick = myGlobals.IMagick;
const Util = myGlobals.Util;
const cvars = myGlobals.cvars;
const Postgres = myGlobals.Postgres;
const CommandHelper = myGlobals.CommandHelper;

Util.mkdir(DBot.WebRoot + '/msgs');

const fs = require('fs');

const baseMessageHandleFunc = function(self, str) {
	if (self.wasDeleted)
		return {then: function() {}, catch: function() {}};

	if (str.length > 1800) {
		const sha = String.hash(CurTime() + self.author.id + self.channel.id);
		let oldMess = str;
		str = 'Message is too big to send it here, here is the message: <' + DBot.URLRoot + '/msgs/' + sha + '.txt>';
		let path = DBot.WebRoot + '/msgs/' + sha + '.txt';

		let stream = fs.createWriteStream(path);
		stream.write(oldMess);
		stream.end();
		return str;
	}

	if (self.channel.guild) {
		let me = self.channel.guild.member(DBot.bot.user);
		if (!me) return; // WHAT.
		let myPerms = self.channel.permissionsFor(me);

		if (myPerms && !myPerms.hasPermission('SEND_MESSAGES')) {
			self.author.lastUnableToSendNotification = self.author.lastUnableToSendNotification || 0;

			if (self.author.lastUnableToSendNotification < CurTime()) {
				self.author
						.sendMessage('I am unable to send messages into current channel.')
						.then(function(newMSG) {
							if (self.wasDeleted)
								newMSG.delete(0);
							else
								self.replies.push(newMSG);
						});

				self.author.lastUnableToSendNotification = CurTime() + 40;
			}

			let promise = self.author.sendMessage(str);

			promise.then(function(nmsg) {
				if (self.wasDeleted)
					nmsg.delete(0);
				else
					self.replies.push(nmsg);
			});

			return promise;
		}
	}
};

const msgFuncs = [
	function(str) {
		let baseReply = baseMessageHandleFunc(this, str);
		if (typeof baseReply === 'object')
			return baseReply;
		else if (typeof baseReply === 'string')
			str = baseReply;
		
		let promise = this.___reply(str);
		let self = this;
		
		promise.then(function(nmsg) {
			if (self.wasDeleted)
				nmsg.delete(0);
			else
				self.replies.push(nmsg);
		});
		
		return promise;
	},
	
	function(str) {
		let baseReply = baseMessageHandleFunc(this, str);
		if (typeof baseReply === 'object')
			return baseReply;
		else if (typeof baseReply === 'string')
			str = baseReply;
		
		let promise = this.channel.sendMessage(str);
		let self = this;
		
		promise.then(function(nmsg) {
			self.replies.push(nmsg);
			
			if (self.wasDeleted)
				nmsg.delete(0);
		});
		
		return promise;
	},
	
	function() {
		return !(this.wasDeleted || this.instantEdit);
	},
	
	function() {
		if (this.shouldReply()) return false;
		this.channel.stopTyping();
		return true;
	}
];

DBot._oldMessageHandler = DBot.MessageHandler;
DBot.MessageHandler = function(msg) {
	msg.replies = msg.replies || [];
	
	msg.wasHandled = true;
	msg.promiseReply = msgFuncs[0];
	msg.promiseSend = msgFuncs[1];
	msg.shouldReply = msgFuncs[2];
	msg.checkAbort = msgFuncs[3];
	msg.___reply = msg.___reply || msg.reply; // There is also oldReply, but oldReply is used when command was actually executed.
	msg.reply = msg.promiseReply;
	
	if (msg.pinned) return;
	
	try {
		if (!DBot.SQLReady()) {
			if (DBot.IsMyMessage(msg)) return;
			if (msg.channel.type === 'dm')
				msg.channel.sendMessage('I am loading.\nLeft [' + DBot.LOADING_LEVEL + '/' + DBot.maximalLoadingValue + '] stages\n```[' + DBot.loadingString + ']```');
			return;
		}
		
		hook.Run('OnRawMessage', msg);
		if (DBot.IsMyMessage(msg)) return;
		
		
		msg.internalCreateTime = CurTime();
		hook.Run('OnMessage', msg);
		
		if (hook.Run('CheckValidMessage', msg) === true) return;
		if (hook.Run('PreOnValidMessage', msg) === true) return;
		
		if (DBot.identifyAsk(msg.content) || DBot.IsPM(msg))
			if (hook.Run('HandleAsk', msg, DBot.IdentifyCommand(msg)) === true) return;
		
		hook.Run('OnValidMessage', msg);
		
		if (!msg.author.bot) {
			let supp = hook.Run('OnHumanMessage', msg);
			
			if (supp === true) return;
		};
		
		if (msg.channel.type === 'dm') {
			try {
				DBot.HandleMessage(msg, true);
				return;
			} catch(err) {
				console.error(err);
				return;
			};
		};
		
		if (!DBot.IsAskingMe(msg)) return;
		
		if (DBot.IsAskingMe(msg) && !DBot.IsAskingMe_Command(msg)) {
			let myPrefix = DBot.MessagePrefix(msg);
			
			if (myPrefix)
				msg.reply('Hi? x3 @NotDBot help or ' + myPrefix + 'help');
			else
				msg.reply('Hi? x3 @NotDBot help');
			
			return;
		};
		
		try {
			DBot.HandleMessage(msg);
		} catch(err) {
			console.error(err);
		};
	} catch(err) {
		console.error(err);
	};
};

if (DBot._oldMessageHandler) {
	try {
		DBot.bot.removeListener('message', DBot._oldMessageHandler);
	} catch(err) {
		console.error(err);
	}
}

DBot.bot.on('message', DBot.MessageHandler);

DBot.CommandsAntiSpam = DBot.CommandsAntiSpam || {};

DBot.ParseString = function(str, ignoreHandlers) {
	let charset = str.split('');
	let nextHaveNoAction = false;
	let output = [];
	let handlers = [];
	let current = '';
	let inDouble = false;
	let inSingle = false;
	let parsingHandlers = false;
	
	for (let item of charset) {
		if (nextHaveNoAction) {
			nextHaveNoAction = false;
			current += item;
			continue;
		};
		
		if (item === ' ' && !inDouble && !inSingle) {
			if (current !== '') {
				if (!parsingHandlers) {
					output.push(current);
				} else {
					handlers.push(current);
				};
			};
			
			current = '';
			continue;
		};
		
		if (item === '\\') {
			nextHaveNoAction = true;
			continue;
		};
		
		if (item === '|' && !inSingle && !inDouble && !ignoreHandlers) {
			parsingHandlers = true;
			continue;
		};
		
		if (item === '"') {
			if (inDouble) {
				if (inSingle) {
					current += item;
				} else {
					if (current !== '') {
						if (!parsingHandlers) {
							output.push(current);
						} else {
							handlers.push(current);
						};
					} else {
						if (!parsingHandlers) {
							output.push(null);
						} else {
							handlers.push(null);
						};
					};
					
					current = '';
					inDouble = false;
				};
			} else if (current === '') {
				if (inSingle) {
					current += item;
				} else {
					inDouble = true;
				};
			} else {
				current += item;
			};
			
			continue;
		}
		
		if (item === '\'') {
			if (inSingle) {
				if (inDouble) {
					current += item;
				} else {
					if (current !== '') {
						if (!parsingHandlers) {
							output.push(current);
						} else {
							handlers.push(current);
						};
					} else {
						if (!parsingHandlers) {
							output.push(null);
						} else {
							handlers.push(null);
						};
					};
					
					current = '';
					inSingle = false;
				};
			} else if (current === '') {
				if (inDouble) {
					current += item;
				} else {
					inSingle = true;
				};
			} else {
				current += item;
			};
			
			continue;
		}
		
		current += item;
	};
	
	if (current !== '') {
		if (!parsingHandlers) {
			output.push(current);
		} else {
			handlers.push(current);
		};
	};
	
	for (let i in output) {
		if (output[i] === null)
			output[i] = '';
	};
	
	for (let i in handlers) {
		if (handlers[i] === null)
			handlers[i] = '';
	};
	
	return [output, handlers];
};

DBot.__LastMoreCommand = DBot.__LastMoreCommand || {};
DBot.__LastRetryCommand = DBot.__LastRetryCommand || {};

hook.Add('ChannelInitialized', 'LastMoreCommand', function(channel) {
	DBot.__LastMoreCommand[channel.id] = {};
	DBot.__LastRetryCommand[channel.id] = {};
});

let CompareStrings = function(Str1, Str2) {
	let result = Math.min(Str1.length, Str2.length);
	
	for (let I1 in Str1) {
		if (I1 > Str2.length) {
			result--;
			continue;
		};
		
		let cond = Str1[I1] === Str2[I1];
		
		for (let i1 = -1; i1 <= 1; i1++) {
			if (Str2[I1 + i1] !== '' && Str1[I1 + i1] === Str2[I1]) {
				cond = true;
				break;
			};
		};
		
		if (!cond)
			result--;
	};
	
	return result;
};

const findRelated = function(str) {
	let matches = [];
	let len = str.length;
	let minimum = len * .6;
	
	for (let Command in DBot.Commands) {
		if (Command.help_hide)
			continue;
		
		let comp = CompareStrings(Command, str);
		
		if (comp >= minimum) {
			matches.push([Command, comp]);
		};
	};
	
	if (!matches[0])
		return [];
	
	matches.sort(function(a, b) {
		if (a[1] < b[1]) {
			return 1;
		} else {
			return -1;
		};
	});
	
	return matches;
};

let clearCommand;

{
	let clearExpr = /[a-zа-я0-9\+\-\=_]/gi;
	
	clearCommand = function(str) {
		let output = '';
		
		str.replace(clearExpr, function(match) {
			output += match;
		});
		
		return output;
	};
};

DBot.__SpamScore = DBot.__SpamScore || {};

setInterval(function() {
	for (let i in DBot.__SpamScore) {
		if (DBot.__SpamScore[i] > 0) {
			DBot.__SpamScore[i]--;
		};
	};
}, 1000);

DBot.ExecuteCommand = function(cCommand, msg, parsedArgs, rawcmd, command, extraArgument, parsedHandlers) {
	let can = hook.Run('ExecuteCommand', msg.author, command, msg);
	
	if (can === false) {
		return;
	};
	
	if (!DBot.owners.includes(msg.author.id)) {
		DBot.__SpamScore[cCommand.id] = DBot.__SpamScore[cCommand.id] || 0;
		DBot.__SpamScore[cCommand.id]++;

		if (DBot.__SpamScore[cCommand.id] > 8) {
			if (msg.channel.cooldown && msg.channel.cooldown > CurTime()) {
				msg.channel.cooldown = CurTime() + 1;
				return;
			};

			msg.reply('Stop spamming `' + cCommand.id + '`');
			msg.channel.cooldown = CurTime() + 1;

			return;
		};

		let timeout = cCommand.delay || 1.5;
		let curr = UnixStamp();

		if (DBot.CommandsAntiSpam[msg.author.id] && !DBot.DISABLE_ANTISPAM) {
			let delta = DBot.CommandsAntiSpam[msg.author.id] - curr;
			if (delta > 0) {
				if (msg.channel.cooldown && msg.channel.cooldown > CurTime()) {
					msg.channel.cooldown = CurTime() + 1;
					return;
				};

				msg.reply(':broken_heart: P... please, wait before running a new command. Wait ' + (Math.floor(delta * 10)) / 10 + ' seconds');
				msg.channel.cooldown = CurTime() + 1;

				return;
			};
		};

		DBot.CommandsAntiSpam[msg.author.id] = curr + timeout;
	}
	
	if ((!parsedArgs || !parsedArgs[0]) && cCommand.argNeeded) {
		let messageFromCommand = cCommand.failMessage || 'Invalid arguments';
		
		msg.reply(messageFromCommand + Util.HighlightHelp([cCommand.id, '<missing>'], 2) + 'Help:\n```' + DBot.BuildHelpStringForCommand(command) + '```\n');
		return;
	};
	
	if (cCommand.allowUserArgument) {
		for (let k in parsedArgs) {
			if (typeof parsedArgs[k] !== 'string')
				continue;
			
			let user = DBot.IdentifyUser(parsedArgs[k]);
			
			if (user) {
				parsedArgs[k] = user;
			} else {
				switch (parsedArgs[k]) {
					case '@me':
					case '@myself':
					case '@self':
					case '@user':
					case '%self%':
					case '%me%':
					case '%myself%':
					case '%user%':
						parsedArgs[k] = msg.author;
						break;
					case '@bot':
					case '@notdbot':
					case '%bot%':
					case '%notdbot%':
						parsedArgs[k] = DBot.bot.user;
						break;
					case '@owner':
					case '@serverowner':
					case '@server_owner':
					case '%owner%':
					case '%serverowner%':
					case '%server_owner%':
						if (msg.channel.guild) parsedArgs[k] = msg.channel.guild.owner.user;
						break;
				};
			};
		};
	};
	
	const continueCallback = function() {
		if (cCommand.checkAccess) {
			let reply = cCommand.checkAccess(parsedArgs, rawcmd, msg);

			if (!reply) {
				msg.reply('No access');
				return;
			};
		};

		if (!DBot.__LastMoreCommand[msg.channel.id]) {
			// PM channel workaround
			DBot.__LastMoreCommand[msg.channel.id] = {};
		};

		if (!DBot.__LastRetryCommand[msg.channel.id]) {
			// PM channel workaround
			DBot.__LastRetryCommand[msg.channel.id] = {};
		};

		if (cCommand.id !== 'more' && cCommand.id !== 'retry') {
			if (cCommand.more) {
				extraArgument = extraArgument || [];
				DBot.__LastMoreCommand[msg.channel.id][msg.author.id] = [cCommand, parsedArgs, rawcmd, extraArgument, parsedHandlers];
			};

			DBot.__LastRetryCommand[msg.channel.id][msg.author.id] = [cCommand, parsedArgs, rawcmd, extraArgument, parsedHandlers];
		};

		msg.oldReply = msg.oldReply || msg.reply;
		let PIPE_HIT = false;

		msg.reply = function(str) {
			if (this.wasDeleted || this.instantEdit)
				return;

			if (PIPE_HIT) {
				let promise = this.oldReply(str);
				let self = this;

				promise.then(function(nmsg) {
					self.replies.push(nmsg);
				});

				return promise;
			};

			if (cCommand.id !== 'more' && cCommand.id !== 'retry' && parsedHandlers[0]) {
				let pipeID = parsedHandlers[0].toLowerCase();
				let pipe = DBot.CommandsPipes[pipeID];

				if (pipe) {
					let spliced = Array.Copy(parsedHandlers);
					spliced.splice(0, 1);
					let splitted = Array.Append(spliced, str.split(' '));

					let rawcmd = '';
					let first = true;

					for (let i in splitted) {
						if (first) {
							rawcmd = splitted[i];
							first = false;
						} else {
							rawcmd += ' ' + splitted[i];
						};
					};

					if (!pipe.no_touch)
						rawcmd = rawcmd.replace(/```/gi, '');

					let parsedData = DBot.ParseString(rawcmd, true);
					let parsedArgs = parsedData[0];

					PIPE_HIT = true;
					let reply;

					msg.reply = msg.promiseReply;
					
					const currentFuncObj = {
						msg: msg,
						server: msg.channel.guild || null,
						guild: msg.channel.guild || null,
						channel: msg.channel,
						args: parsedArgs,
						author: msg.author,
						member: msg.member,
						content: msg.content,
						contents: msg.content,
						cmd: rawcmd,
						extra: extraArgument,
						self: cCommand,
						handlers: parsedHandlers,
						reply: msg.reply,
						sendMessage: msg.sendMessage,
						message: msg.sendMessage,
						pm: DBot.IsPM(msg),
						send: msg.sendMessage
					};

					try {
						reply = pipe.func.call(currentFuncObj, parsedArgs, rawcmd, msg);
					} catch(err) {
						msg.oldReply('<internal pony error>');
						console.error(err);
						return;
					};

					if (reply === true) {
						return;
					} else if (typeof reply === 'string') {
						return this.promiseReply(reply);
					} else if (reply === false) {
						return this.promiseReply('Pipe that you specified does not accept command output');
					};
				};
			};

			let promise = this.oldReply(str);
			let self = this;

			promise.then(function(nmsg) {
				self.replies.push(nmsg);
			});

			return promise;
		};

		msg.sendMessage = function(str) {
			if (this.wasDeleted || this.instantEdit)
				return;

			if (PIPE_HIT) {
				return this.promiseReply(str);
			};

			if (cCommand.id !== 'more' && cCommand.id !== 'retry' && parsedHandlers[0]) {
				let pipeID = parsedHandlers[0].toLowerCase();
				let pipe = DBot.CommandsPipes[pipeID];

				if (pipe) {
					let spliced = Array.Copy(parsedHandlers);
					spliced.splice(0, 1);
					let splitted = Array.Append(spliced, str.split(' '));

					let rawcmd = '';
					let first = true;

					for (let i in splitted) {
						if (first) {
							rawcmd = splitted[i];
							first = false;
						} else {
							rawcmd += ' ' + splitted[i];
						};
					};

					if (!pipe.no_touch)
						rawcmd = rawcmd.replace(/```/gi, '');

					let parsedData = DBot.ParseString(rawcmd, true);
					let parsedArgs = parsedData[0];

					PIPE_HIT = true;
					let reply;
					
					const currentFuncObj = {
						msg: msg,
						server: msg.channel.guild || null,
						guild: msg.channel.guild || null,
						channel: msg.channel,
						args: parsedArgs,
						author: msg.author,
						member: msg.member,
						content: msg.content,
						contents: msg.content,
						cmd: rawcmd,
						extra: extraArgument,
						self: cCommand,
						handlers: parsedHandlers,
						reply: msg.reply,
						sendMessage: msg.sendMessage,
						message: msg.sendMessage,
						pm: DBot.IsPM(msg),
						send: msg.sendMessage
					};
					
					try {
						reply = pipe.func.call(currentFuncObj, parsedArgs, rawcmd, msg);
					} catch(err) {
						msg.oldReply('<internal pony error>');
						console.error(err);
						return;
					};

					if (reply === true) {
						return;
					} else if (typeof reply === 'string') {
						return this.promiseSend(reply);
					} else if (reply === false) {
						return this.promiseReply('Pipe that you specified does not accept command output');
					};
				};
			};

			return this.promiseSend(str);
		};

		hook.Run('PreExecuteCommand', cCommand.id, msg.author, parsedArgs, rawcmd, msg, extraArgument, parsedHandlers);

		let reply;
		
		const currentFuncObj = {
			msg: msg,
			server: msg.channel.guild || null,
			guild: msg.channel.guild || null,
			channel: msg.channel,
			args: parsedArgs,
			author: msg.author,
			member: msg.member,
			content: msg.content,
			contents: msg.content,
			cmd: rawcmd,
			extra: extraArgument,
			self: cCommand,
			handlers: parsedHandlers,
			reply: msg.reply,
			sendMessage: msg.sendMessage,
			message: msg.sendMessage,
			pm: DBot.IsPM(msg),
			send: msg.sendMessage
		};

		try {
			reply = cCommand.func.call(currentFuncObj, parsedArgs, rawcmd, msg, extraArgument);
		} catch(err) {
			msg.oldReply('<internal pony error>');
			console.error(err);
			return;
		};

		hook.Run('PostExecuteCommand', cCommand.id, msg.author, parsedArgs, rawcmd, msg, extraArgument, parsedHandlers, currentFuncObj);
		hook.Run('CommandExecuted', cCommand.id, msg.author, parsedArgs, rawcmd, msg, extraArgument, parsedHandlers, currentFuncObj);

		if (typeof reply === 'string') {
			msg.reply(reply);
		} else if (reply === false) {
			msg.oldReply('No such a command');
		};

		return reply;
	};
	
	if ((cCommand.selections || cCommand.allow_selections || cCommand.allowSelections) && !DBot.IsPM(msg)) {
		const fnArray = [];
		
		for (const k in parsedArgs) {
			const a = parsedArgs[k];
			if (typeof a !== 'string') continue;
			
			const num = Number.from(a);
			
			if (num) {
				fnArray.push((next, currI) => {
					const selection = new DBot.selectionObject(num);
					
					selection.fetch(() => {
						if (!selection.checkCombined(msg.author, msg.channel.guild)) {
							parsedArgs.splice(k - currI, 1);
							next();
							return;
						}
						
						const members = selection.getValidUsers();
						members.unshift(k - currI, 1);
						parsedArgs.splice.apply(parsedArgs, members);
						next();
					});
				});
			}
		}
		
		Util.fnNext(fnArray, continueCallback);
	} else {
		return continueCallback();
	}
};

hook.Add('OnMessageDeleted', 'Handler', function(msg) {
	msg.wasDeleted = true;
	
	if (!msg.replies) return;
	
	for (let mess of msg.replies) {
		if (mess.deletable)
			mess.delete(0);
	};
});

hook.Add('OnMessageEdit', 'Handler', function(omsg, nmsg) {
	if (!omsg.wasHandled) return;
	omsg.internalCreateTime = omsg.internalCreateTime || CurTime();
	nmsg.internalCreateTime = omsg.internalCreateTime;
	omsg.replies = omsg.replies || [];
	nmsg.replies = omsg.replies;
	
	let pinned = nmsg.pinned || omsg.pinned;
	omsg.pinned = pinned;
	nmsg.pinned = pinned;
	
	if (pinned) return;
	
	const contentsChanged = omsg.content && nmsg.content && omsg.content !== nmsg.content;
	if (!contentsChanged) return;
	
	if (omsg.internalCreateTime + 1 > CurTime())
		return;
	
	if (omsg.internalCreateTime + 3 > CurTime() && contentsChanged && (!omsg.replies || !omsg.replies[0]) && (!nmsg.replies || !nmsg.replies[0])) {
		omsg.instantEdit = true;
		nmsg.instantEdit = true;
	} else {
		omsg.instantEdit = false;
		nmsg.instantEdit = false;
	};
	
	for (let mess of omsg.replies) {
		if (mess.deletable)
			mess.delete(0);
	};
	
	let pm = DBot.IsPM(nmsg);
	
	if (!pm && (!nmsg.member || !nmsg.member.uid)) {
		if (nmsg.member)
			DBot.DefineMember(nmsg.member);
		
		return;
	};
	
	try {
		if (DBot.HandleMessage(nmsg, pm, true))
			DBot.HandleMessage(nmsg, pm);
	} catch(err) {
		console.error(err);
	}
});

cvars.ServerVar('prefix', '}', [FCVAR_NOTNULL], 'Prefix of bot commands on server');
cvars.ChannelVar('prefix', '', [], 'Prefix of bot commands on current channel. If empty, uses server prefix instead');
cvars.ServerVar('prefix_disable', '0', [FCVAR_BOOLONLY], 'Disable bot prefix. In this case, you can command to bot only by @Mention');
cvars.ChannelVar('prefix_disable', '0', [FCVAR_BOOLONLY], 'Disable bot prefix in current channel. In this case, you can command to bot only by @Mention');

DBot.identifyAsk = function(content) {
	return content.substr(0, DBot.aidLen) === DBot.askId || content.substr(0, DBot.aidLen2) === DBot.askId2;
};

DBot.IsAskingMe = function(msg) {
	if (msg.content.substr(0, DBot.aidLen) === DBot.askId)
		return true;
	
	if (msg.content.substr(0, DBot.aidLen2) === DBot.askId2)
		return true;
	
	let prefix = '}';
	
	if (!DBot.IsPM(msg)) {
		if (cvars.Server(msg.channel.guild).getVar('prefix_disable').getBool())
			return false;
		
		if (cvars.Channel(msg.channel).getVar('prefix_disable').getBool())
			return false;
		
		let sPrefix = cvars.Server(msg.channel.guild).getVar('prefix').getString();
		let cPrefix = cvars.Channel(msg.channel).getVar('prefix').getString();
		
		if (cPrefix !== '')
			prefix = cPrefix;
		else
			prefix = sPrefix;
	};
	
	if (msg.content.substr(0, 1) === prefix)
		return true;
	
	return false;
};

DBot.MessagePrefix = function(msg) {
	if (DBot.IsPM(msg))
		return '';
	else {
		if (cvars.Server(msg.channel.guild).getVar('prefix_disable').getBool())
			return false;
		
		if (cvars.Channel(msg.channel).getVar('prefix_disable').getBool())
			return false;
		
		let sPrefix = cvars.Server(msg.channel.guild).getVar('prefix').getString();
		let cPrefix = cvars.Channel(msg.channel).getVar('prefix').getString();
		
		if (cPrefix !== '')
			return cPrefix;
		else
			return sPrefix;
	};
};

DBot.IsAskingMe_Command = function(msg) {
	if (msg.content.substr(0, DBot.aidcLen) === DBot.askIdC)
		return true;
	
	if (msg.content.substr(0, DBot.aidcLen2) === DBot.askIdC2)
		return true;
	
	let prefix = '}';
	
	if (!DBot.IsPM(msg)) {
		if (cvars.Server(msg.channel.guild).getVar('prefix_disable').getBool())
			return false;
		
		if (cvars.Channel(msg.channel).getVar('prefix_disable').getBool())
			return false;
		
		let sPrefix = cvars.Server(msg.channel.guild).getVar('prefix').getString();
		let cPrefix = cvars.Channel(msg.channel).getVar('prefix').getString();
		
		if (cPrefix !== '')
			prefix = cPrefix;
		else
			prefix = sPrefix;
	};
	
	if (msg.content.substr(0, 1) === prefix)
		return true;
	
	return false;
};

DBot.IdentifyCommand = function(msg) {
	let rawmessage = msg.content;
	let isPrivate = DBot.IsPM(msg);
	
	if (rawmessage === '') {
		return false;
	};
	
	let splitted = Array.Trim(rawmessage.split(' '));
	
	let prefix = '}';
	
	if (!isPrivate) {
		let sPrefix = cvars.Server(msg.channel.guild).getVar('prefix').getString();
		let cPrefix = cvars.Channel(msg.channel).getVar('prefix').getString();
		
		if (cPrefix !== '')
			prefix = cPrefix;
		else
			prefix = sPrefix;
	};
	
	if (rawmessage.substr(0, prefix.length) === prefix) {
		let recreate = [];
		recreate.push(prefix);
		
		splitted[0] = splitted[0].substr(prefix.length);
		
		for (let i in splitted) {
			recreate.push(splitted[i]);
		};
		
		splitted = recreate;
	};
	
	let rawCommand = splitted[1];
	
	if (!rawCommand)
		return false;
	
	let command = clearCommand(rawCommand.toLowerCase());
	
	/*
		splitted[shift - 1] = Our ID
		splitted[shift] = Command
		splitted[...] = arguments
	*/
	
	if (!DBot.Commands[command]) {
		return false;
	};
	
	let cCommand = DBot.Commands[command];
	return cCommand.id;
};

DBot.HandleMessage = function(msg, isPrivate, test) {
	let shift = 1;
	
	if (isPrivate)
		shift = 0;
	
	let rawmessage = msg.content;
	
	if (rawmessage === '') {
		if (test)
			return false;
		
		if (isPrivate) {
			if (msg.attachments) {
				msg.reply('Oh! A Picture x3');
			};
		};
		
		return;
	};
	
	let ServerBans;
	let ChannelBans;
	let MemberBans;
	let prefix = '}';
	
	if (!isPrivate) {
		ServerBans = DBot.ServerCBans(msg.channel.guild);
		ChannelBans = DBot.ChannelCBans(msg.channel);
		MemberBans = DBot.MemberCBans(msg.member);
		
		const channelVars = cvars.Channel(msg.channel);
		const serverVars = cvars.Server(msg.channel.guild);
		
		if (channelVars && serverVars) {
			let sPrefix = serverVars.getVar('prefix').getString();
			let cPrefix = channelVars.getVar('prefix').getString();
			
			if (cPrefix !== '')
				prefix = cPrefix;
			else
				prefix = sPrefix;
		} else {
			prefix = '}';
		}
	};
	
	rawmessage = rawmessage.replace(new RegExp(`^${prefix}([ ]+)`, 'i'), prefix); // Trim spaces between prefix and command
	
	let splitted = Array.Trim(rawmessage.split(' '));
	const startsWithPrefix = rawmessage.substr(0, prefix.length) === prefix;
	
	if (startsWithPrefix && !isPrivate) {
		let recreate = [];
		recreate.push(prefix);
		
		splitted[0] = splitted[0].substr(prefix.length);
		
		for (let i in splitted) {
			recreate.push(splitted[i]);
		};
		
		splitted = recreate;
	} else if (startsWithPrefix && isPrivate) {
		if (test) return false;

		msg.reply('Oh, you don\'t need } in PM messages x3\nTry without }');
		return;
	} else if (!startsWithPrefix && !isPrivate) {
		return false;
	};
	
	let rawCommand = splitted[shift];
	
	if (!rawCommand)
		return false;
	
	let command = clearCommand(rawCommand.toLowerCase());
	
	/*
		splitted[shift - 1] = Our ID
		splitted[shift] = Command
		splitted[...] = arguments
	*/
	
	let can = hook.Run('CanExecuteCommand', msg.author, command, msg);
	
	if (can === false)
		return false;
	
	if (!DBot.Commands[command]) {
		if (test)
			return false;
		else {
			if (msg.channel.cooldown && msg.channel.cooldown > CurTime()) {
				msg.channel.cooldown = CurTime() + 1;
				return;
			};
			
			msg.channel.cooldown = CurTime() + 1;
		};
		
		let output = 'No such a command';
		let related = findRelated(command);
		
		if (related[0] && related[0][1] > 1) {
			output += '\nMaybe you mean `' + related[0][0] + '`?';
		};
		
		msg.reply(output);
		return;
	};
	
	let cCommand = DBot.Commands[command];
	if (hook.Run('CanExecuteValidCommand', msg.author, cCommand.id, msg) === false) return false;
	
	if (ServerBans) {
		if (ServerBans.isBanned(cCommand.id)) {
			if (test) return false;
			msg.reply('Command is banned on entrie server ;w;');
			return;
		}
		
		if (!msg.member.hasPermission('MANAGE_GUILD')) {
			if (ServerBans.checkPermissions(cCommand.id, msg.member)) {
				if (test) return false;
				msg.reply('You have missing permissions');
				return false;
			}
			
			if (ServerBans.checkRoles(cCommand.id, msg.member.roles.values())) {
				if (test) return false;
				msg.reply('You have missing required role');
				return false;
			}
		}
	};
	
	if (ChannelBans && ChannelBans.isBanned(cCommand.id)) {
		if (test) return false;
		msg.reply('Command is banned on this channel ;w;');
		return false;
	};
	
	if (ServerBans && ServerBans.isBanned(cCommand.name)) {
		if (test) return false;
		msg.reply('Command is banned on entrie server ;w;');
		return false;
	};
	
	if (ChannelBans && ChannelBans.isBanned(cCommand.name)) {
		if (test) return false;
		msg.reply('Command is banned on this channel ;w;');
		return false;
	};
	
	if (cCommand.nopm && DBot.IsPM(msg)) {
		if (test) return false;
		msg.reply('Command is not allowed to be ran in PM (DM)');
		return false;
	}
	
	if (test) return true;
	
	let rawcmd = '';
	let first = true;
	
	for (let i = 1 + shift; i < splitted.length; i++) {
		if (splitted[i] === '')
			continue;
		
		if (first) {
			rawcmd = splitted[i];
			first = false;
		} else {
			rawcmd += ' ' + splitted[i];
		};
	};
	
	let parsedData = DBot.ParseString(rawcmd);
	let parsedArgs = parsedData[0];
	let parsedHandlers = parsedData[1];
	
	let redoneCmd = '';
	let firstRedone = true;
	
	for (let i in parsedArgs) {
		if (firstRedone) {
			redoneCmd = parsedArgs[i];
			firstRedone = false;
		} else {
			redoneCmd += ' ' + parsedArgs[i];
		};
	};
	
	DBot.ExecuteCommand(cCommand, msg, parsedArgs, redoneCmd, command, null, parsedHandlers);
};
