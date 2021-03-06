

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
const Postgres = myGlobals.Postgres;
const fs = require('fs');
const moment = require('moment');
const utf8 = require('utf8');
const hDuration = require('humanize-duration');

Util.SafeCopy = function(path, to) {
	fs.stat(to, function(err, stat) {
		if (stat)
			return;
		
		fs.createReadStream(path).pipe(fs.createWriteStream(to));
	});
};

Util.Copy = function(path, to) {
	fs.createReadStream(path).pipe(fs.createWriteStream(to));
};

global.TimezoneOffset = function() {
	return (new Date()).getTimezoneOffset() * 60;
};

global.TimeOffset = global.TimezoneOffset;
global.CurTimeOffset = global.TimezoneOffset;
global.RealTimeOffset = global.TimezoneOffset;
global.SysTimeOffset = global.TimezoneOffset;

const emptyFunc = function() {};

Util.CreateDirectory = function(path, callback) {
	callback = callback || emptyFunc;
	fs.stat(path, function(err, stat) {
		if (stat) {
			callback();
		} else {
			fs.mkdir(path, function() {callback();});
		}
	});
};

Util.truncate = function(path, callback) {
	callback = callback || emptyFunc;
	
	fs.stat(path, function(err, stat) {
		if (!stat) {
			callback();
		} else {
			fs.readdir(path, function(err, list) {
				let done = 0;
				for (const file of list) {
					fs.unlink(file, function() {
						done++;
						if (done === list.length)
							callback();
					});
				}
			});
		}
	});
};

Util.mkdir = Util.CreateDirectory;
Util.CreateDir = Util.CreateDirectory;

Util.HighlightHelp = function(args, pos, toMerge, noTilds) {
	let output;
	let output2 = '';
	
	if (toMerge) {
		Array.Append(args, toMerge);
	}
	
	if (!args[pos - 1]) {
		args[pos - 1] = '<missing>';
	}
	
	if (args.join('').length > 100) {
		for (let i in args) {
			let str = args[i];
			
			if (typeof args[i] === 'object') { // Assume user
				str = '<@' + args[i].id + '> ';
			}
			
			if (output)
				output += str;
			else
				output = '\n' + str + '\n';
			
			if ((Number(i) + 1) === pos)
				output += '  <----- \n' + String.repeat('^', str.length) + '\n';
			else
				output += '\n';
		}
	} else {
		for (let i in args) {
			let str = args[i];
			
			if (typeof args[i] === 'object') { // Assume user
				str = '<@' + args[i].id + '>';
			}
			
			if ((Number(i) + 1) === pos) {
				output2 += String.repeat('^', str.length) + ' ';
			} else {
				output2 += String.repeat(' ', str.length) + ' ';
			}
			
			if (output)
				output += ' ' + str;
			else
				output = str;
		}
	}
	
	if (!noTilds)
		return '\n```' + output + '\n' + output2 + '```';
	else
		return output + '\n' + output2;
};

Util.output = function(process2) {
	process2.stderr.pipe(process.stdout);
	process2.stdout.pipe(process.stdout);
	process2.on('error', err => {
		console.error(err);
	});
};

Util.Redirectstd = Util.output;
Util.Redirect = Util.output;
Util.redirect = Util.output;

const replaceBlocks = [
	[/&/gi, '&amp;'],
	[/"/gi, '&quot;'],
	[/'/gi, '&#039;'],
	[/</gi, '&lt;'],
	[/>/gi, '&gt;'],
	
	[/\*\*(([^*][^*])*)\*\*/gi, '<b>$1</b>'],
	[/\*(([^\*])*)\*/gi, '<i>$1</i>'],
	[/```(([^"][^"][^"])*)```/gi, '<span class="codeblock">$1</span>'],
	[/[^"]"(([^"])*)"[^"]/gi, '<span class="codeblock_s">$1</span>'],
	[/\n/gi, '<br>']
];

Util.ParseMarkdown = function(str) {
	let output = str;
	
	for (let i in replaceBlocks) {
		output = output.replace(replaceBlocks[i][0], replaceBlocks[i][1]);
	}
	
	return output;
};

Util.HaveValue = function(arr, val) {
	for (let i in arr) {
		if (arr[i] === val)
			return true;
	}
	
	return false;
};

Util.HasValue = Util.HaveValue;

Util.BuildArgumentsString = function(arr) {
	let newArr = [];
	
	for (let arg of arr) {
		newArr.push('"' +
			String(arg)
			.replace(/\\/, '\\\\')
			.replace(/\(/, '\\(')
			.replace(/\)/, '\\)')
			.replace(/'/, '\\\'')
			.replace(/\$/, '\\$')
			.replace(/#/, '\\#')
		+ '"');
	}
	
	return newArr.join(' ');
};

Util.ReadString = function(buf, offestStart) {
	let output = '';
	
	for (let i = offestStart; i < buf.length; i++) {
		let Char = String.fromCharCode(buf[i]);
		
		if (Char !== '\0') {
			output += Char;
		} else {
			return [utf8.decode(output), i - offestStart + 1];
		}
	}
	
	return [utf8.decode(output), i - offestStart + 1];
};

Util.parseHexColor = function(hex) {
	let toParse = hex;
	
	if (hex.substr(0, 1) === '#') {
		toParse = hex.substr(1);
	}
	
	let red = parseInt(toParse.substr(0, 2), 16);
	let green = parseInt(toParse.substr(2, 2), 16);
	let blue = parseInt(toParse.substr(5, 2), 16);
	
	return [red, green, blue];
};

Util.WrapText = function(text, limit) {
	limit = limit || 120;
	let explode = text.split(/( |\n)+/gi);
	let lines = [];
	let cline = 0;
	let curr = 0;
	
	for (let word of explode) {
		curr += word.length + 1;
		
		if (lines[cline])
			lines[cline] += ' ' + word;
		else
			lines[cline] = word;
		
		if (curr >= limit) {
			cline++;
			curr = 0;
		}
	}
	
	return lines.join('\n');
};

Util.formatStamp = function(stamp) {
	return moment.unix(stamp).format('dddd, MMMM Do YYYY, HH:mm:ss') + ' (' + hDuration(Math.floor(CurTime() - stamp) * 1000) + ' ago)';
};

const parsedTextReplaceRules = [
	new RegExp('\\*\\*', 'gi'),
	new RegExp('```', 'gi'),
	new RegExp('_', 'gi'),
	new RegExp('`', 'gi')
];

Util.nonParsedText = function(text) {
	for (const e of parsedTextReplaceRules) {
		text = text.replace(e, '');
	}
	
	return text;
};

Util.fnNext = function(array, callback) {
	let i = -1;
	
	const next = function() {
		i++;
		
		if (!array[i]) {
			if (callback) callback();
		} else {
			const fn = array[i];
			fn(next, i);
		}
	};
	
	next();
};