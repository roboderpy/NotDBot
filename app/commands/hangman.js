
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

const fs = require('fs');
const json3 = require('json3');
const numeral = require('numeral');

myGlobals.__hangman_mapped = {
	hard: fs.readFileSync('./resource/hangman/hard.csv', 'utf8').split(/\r?\n/),
	medium: fs.readFileSync('./resource/hangman/medium.csv', 'utf8').split(/\r?\n/),
	easy: fs.readFileSync('./resource/hangman/easy.csv', 'utf8').split(/\r?\n/),
	very_easy: fs.readFileSync('./resource/hangman/very_easy.csv', 'utf8').split(/\r?\n/),
	generated_simple: fs.readFileSync('./resource/hangman/gen_simple.csv', 'utf8').split(/\r?\n/)
};

{
	const avaliableFortune = json3.parse(fs.readFileSync('./resource/hangman/hangman_fortune.json', 'utf8'));
	const avaliableFortuneVulgar = json3.parse(fs.readFileSync('./resource/hangman/hangman_fortunev.json', 'utf8'));
	
	for (const i in avaliableFortune) {
		myGlobals.__hangman_mapped['fortune_' + i] = avaliableFortune[i];
	}

	for (const i in avaliableFortune) {
		myGlobals.__hangman_mapped['vulgar_fortune_' + i] = avaliableFortuneVulgar[i];
	}
	
	for (const fName of ['hard', 'medium', 'easy', 'very_easy']) {
		myGlobals.__hangman_mapped['word_gen_' + fName + '_two'] = fs.readFileSync('./resource/hangman/gen_' + fName + '_two.csv', 'utf8').split(/\r?\n/);
		myGlobals.__hangman_mapped['word_gen_' + fName + '_three'] = fs.readFileSync('./resource/hangman/gen_' + fName + '_three.csv', 'utf8').split(/\r?\n/);
		myGlobals.__hangman_mapped['word_gen_' + fName + '_four'] = fs.readFileSync('./resource/hangman/gen_' + fName + '_four.csv', 'utf8').split(/\r?\n/);
	}
}

let avaliableString = '';

for (const i in myGlobals.__hangman_mapped) {
	avaliableString += ', ' + i;
}

avaliableString = avaliableString.substr(1);

const allowedChars = [
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'i',
	'o',
	'p',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M'
];

class HangmanDispatcher {
	constructor(channel, word) {
		this.channel = channel;
		
		if (this.channel.guild)
			this.server = this.channel.guild;
		else
			this.server = null;
		
		if (word)
			this.reset(word);
	}
	
	reset(word) {
		this.word = word.toLowerCase();
		
		const checkArray = word.split('');
		const newArray = [];
		
		for (const c of checkArray)
			if (!newArray.includes(c) && allowedChars.includes(c))
				newArray.push(c.toLowerCase());

		this.chars = newArray;
		
		this.WIN = 0;
		this.DEFEAT = 1;
		this.IN_GAME = 2;
		
		this.bannedChars = [];
		this.foundChars = [];
		this.defeat = 0;
		this.users = [];
	}

	checkChar(char) {
		return this.bannedChars.includes(char);
	}
	
	leftChars() {
		return Array.Diff(this.foundChars, this.chars)[1];
	}
	
	left() {
		return this.leftChars().length;
	}
	
	isUnlocked(char) {
		return this.foundChars.includes(char.toLowerCase());
	}

	tryChar(char, simulated) {
		if (this.checkChar(char))
			return false;
		
		char = char.toLowerCase();
		
		if (this.chars.includes(char)) {
			if (!simulated) {
				this.bannedChars.push(char);
				this.foundChars.push(char);
			}
			
			return true;
		} else {
			if (!simulated) {
				this.bannedChars.push(char);
				this.defeat++;
			}
			
			return false;
		}
	}
	
	suggest(user, char, simulated) {
		const status = this.tryChar(char, simulated);
		
		if (!simulated) {
			this.addPracticant(user);
			
			Postgres.query(`INSERT INTO hangman_score ("ID", "CHARS_SUGGESTED") VALUES (${sql.User(user)}, 1)
								ON CONFLICT ("ID") DO UPDATE SET "CHARS_SUGGESTED" = hangman_score."CHARS_SUGGESTED" + 1;`);
		}
		
		if (status) {
			if (!simulated) {
				Postgres.query(`INSERT INTO hangman_score ("ID", "CHARS_HIT") VALUES (${sql.User(user)}, 1)
									ON CONFLICT ("ID") DO UPDATE SET "CHARS_HIT" = hangman_score."CHARS_HIT" + 1;`);
			}
			
			return true;
		} else {
			if (!simulated) {
				Postgres.query(`INSERT INTO hangman_score ("ID", "CHARS_MISS") VALUES (${sql.User(user)}, 1)
									ON CONFLICT ("ID") DO UPDATE SET "CHARS_MISS" = hangman_score."CHARS_MISS" + 1;`);
			}
			
			return false;
		}
	}
	
	getStatus() {
		if (this.defeat >= 8)
			return this.DEFEAT;
		else if (this.left() > 0)
			return this.IN_GAME;
		else
			return this.WIN;
	}
	
	addPracticant(user) {
		if (this.users.includes(user))
			return;
		
		this.users.push(user);
		
		Postgres.query(`INSERT INTO hangman_score ("ID", "GAMES", "TOTAL_LENGTH") VALUES (${sql.User(user)}, 1, ${this.word.length})
							ON CONFLICT ("ID") DO UPDATE SET "GAMES" = hangman_score."GAMES" + 1,
															 "TOTAL_LENGTH" = hangman_score."TOTAL_LENGTH" + excluded."TOTAL_LENGTH";`);
	}
	
	
	practicantsNames() {
		const output = [];
		
		for (const user of this.users) {
			output.push('<@' + user.id + '>');
		}
		
		return output.join(', ');
	}
	
	saveStats() {
		const st = this.getStatus();
		
		if (st === this.IN_GAME)
			return;
		
		if (st === this.WIN) {
			for (const user of this.users) {
				Postgres.query(`INSERT INTO hangman_score ("ID", "VICTORIES", "LENGTH_WIN") VALUES (${sql.User(user)}, 1, ${this.word.length})
								ON CONFLICT ("ID") DO UPDATE SET "VICTORIES" = hangman_score."VICTORIES" + 1,
																 "LENGTH_WIN" = hangman_score."LENGTH_WIN" + excluded."LENGTH_WIN";`);
			}
		} else if (st === this.DEFEAT) {
			for (const user of this.users) {
				Postgres.query(`INSERT INTO hangman_score ("ID", "DEFEATS", "LENGTH_DEF") VALUES (${sql.User(user)}, 1, ${this.word.length})
								ON CONFLICT ("ID") DO UPDATE SET "DEFEATS" = hangman_score."DEFEATS" + 1,
																 "LENGTH_DEF" = hangman_score."LENGTH_DEF" + excluded."LENGTH_DEF";`);
			}
		}
	}
	
	abort() {
		if (this.bannedChars.length === 0 || this.getStatus() === this.WIN || this.getStatus() === this.DEFEAT)
			return false; // Game doesn't even started or finished
		
		for (const user of this.users) {
			Postgres.query(`INSERT INTO hangman_score ("ID", "ABORTS", "LENGTH_ABORT") VALUES (${sql.User(user)}, 1, ${this.word.length})
							ON CONFLICT ("ID") DO UPDATE SET "ABORTS" = hangman_score."ABORTS" + 1,
															 "LENGTH_ABORT" = hangman_score."LENGTH_ABORT" + excluded."LENGTH_ABORT";`);
		}
		
		return true;
	}
	
	buildWord() {
		let output = '';
		const st = this.getStatus();
		
		for (const char of this.word) {
			if (!allowedChars.includes(char))
				output += '   ';
			else if (this.isUnlocked(char) || st === this.DEFEAT)
				output += ' ' + char;
			else
				output += ' _';
		}
		
		return output;
	}
	
	getStatusString() {
		let output = '```';
		
		output += `Word - ${this.buildWord()}\n`;
		output += `Named chars: ${this.bannedChars.join(', ')}\n`;
		output += `Left: ${this.chars.length - this.foundChars.length}/${this.chars.length} (${this.foundChars.length}) chars\n`;
		output += `Lives: ${8 - this.defeat}/8\n`;
		
		return output + '```';
	}
}

myGlobals.HangmanStatus = myGlobals.HangmanStatus || {};
const status = myGlobals.HangmanStatus;

module.exports = {
	name: 'hangman',

	help_args: '<action> [arguments]',
	desc: 'Hangman mini-game. Actions are: `start <set>`, `s <char>`, `reset`, `stop`\nWord sets are:\n' + avaliableString,
	delay: 0,

	func: function(args, cmd, msg) {
		const action = (args[0] || '').toLowerCase();
		const channelID = msg.channel.id;
		
		if (action === 'start' || action === 'create' || action === 'begin') {
			if (status[channelID])
				return DBot.CommandError('Game already started! try `reset` command', 'hangman', args, 1);
			
			const pick = args[1] || 'medium';
			
			if (!myGlobals.__hangman_mapped[pick])
				return DBot.CommandError('Invalid word set pick\nValids are: ```' + avaliableString + '```', 'hangman', args, 2);
			
			status[channelID] = new HangmanDispatcher(this.channel, Array.Random(myGlobals.__hangman_mapped[pick]));
			status[channelID].map = myGlobals.__hangman_mapped[pick];
			status[channelID].pick = pick;
			
			return 'The game has started with `' + pick + '` word set!\n' + status[channelID].getStatusString();
		} else if (action === 'suggest' || action === 's' || action === 'try') {
			if (!status[channelID])
				return DBot.CommandError('There is no game at all!', 'hangman', args, 1);
			
			const cStatus = status[channelID].getStatus();
			
			if (cStatus === status[channelID].WIN || cStatus === status[channelID].DEFEAT)
				return 'Game already finished! try `reset` command\n' + status[channelID].getStatusString();
			
			const char = args[1];
			if (!char || !allowedChars.includes(char))
				return DBot.CommandError('Invalid char', 'hangman', args, 2);
			
			status[channelID].addPracticant(this.author);
			if (status[channelID].checkChar(char))
				return 'Char was already suggested!\n' + status[channelID].getStatusString();
			
			const st = status[channelID].suggest(this.author, char);
			const status2 = status[channelID].getStatus();
			
			if (st)
				if (status2 === status[channelID].WIN) {
					status[channelID].saveStats();
					return 'That was correct!\nCongrants! ' + status[channelID].practicantsNames() + ' won!\n' + status[channelID].getStatusString();
				} else {
					return 'That was correct!\n' + status[channelID].getStatusString();
				}
			else
				if (status2 === status[channelID].DEFEAT) {
					status[channelID].saveStats();
					return 'That was miss!\n' + status[channelID].practicantsNames() + ' lose!\n' + status[channelID].getStatusString();
				} else {
					return 'That was miss!\n' + status[channelID].getStatusString();
				}
		} else if (action === 'reset' || action === 'new' || action === 'newgame' || action === 'restart') {
			if (!status[channelID])
				return DBot.CommandError('There is no game at all!', 'hangman', args, 1);
			
			status[channelID].addPracticant(this.author);
			const st = status[channelID].abort();
			status[channelID].reset(Array.Random(status[channelID].map));
			
			if (st)
				return 'Game was aborted and has been counted as aborted game.\nGame has been reset on `' + status[channelID].pick + '` word set!\n' + status[channelID].getStatusString();
			else
				return 'Game has been reset on `' + status[channelID].pick + '` word set!\n' + status[channelID].getStatusString();
		} else if (action === 'stop' || action === 'remove' || action === 'delete' || action === 'close') {
			if (!status[channelID])
				return DBot.CommandError('There is no game at all!', 'hangman', args, 1);
			
			status[channelID].addPracticant(this.author);
			const st = status[channelID].abort();
			delete status[channelID];
			
			if (st)
				return 'Game was aborted and has been counted as aborted game.\nGame instance has been deleted.';
			else
				return 'Game instance has been deleted.';
		} else {
			return DBot.CommandError('Unknown action. Valid are: `start <set>`, `s <char>`, `reset`, `stop`', 'hangman', args, 1);
		}
	}
};

DBot.RegisterCommand({
	name: 'hangmanstats',

	help_args: '[user]',
	desc: 'Hangman stats',
	allowUserArgument: true,

	func: function(args, cmd, msg) {
		const user = typeof args[0] === 'object' && args[0] || msg.author;
		
		msg.channel.startTyping();
		
		Postgres.query(`SELECT * FROM hangman_score WHERE "ID" = ${sql.User(user)}`, (err, data) => {
			msg.channel.stopTyping();
			
			if (!data[0]) {
				msg.reply('No stats!');
				return;
			}
			
			data = data[0];
			
			let output = '```';
			
			output += `Total games:                         ${numeral(data.GAMES).format('0,0')}\n`;
			output += `Total victories:                     ${numeral(data.VICTORIES).format('0,0')}\n`;
			output += `Total defeats:                       ${numeral(data.DEFEATS).format('0,0')}\n`;
			output += `Total game aborts:                   ${numeral(data.ABORTS).format('0,0')}\n`;
			output += `Total game words length:             ${numeral(data.TOTAL_LENGTH).format('0,0')}\n`;
			output += `Total game words length on wins:     ${numeral(data.LENGTH_WIN).format('0,0')}\n`;
			output += `Total game words length on defeats:  ${numeral(data.LENGTH_DEF).format('0,0')}\n`;
			output += `Total game words length on aborts:   ${numeral(data.LENGTH_ABORT).format('0,0')}\n`;
			output += `Total chars suggested:               ${numeral(data.CHARS_SUGGESTED).format('0,0')}\n`;
			output += `Total chars hits:                    ${numeral(data.CHARS_HIT).format('0,0')}\n`;
			output += `Total chars misses:                  ${numeral(data.CHARS_MISS).format('0,0')}\n`;
			
			msg.reply(output + '```');
		});
	}
});
