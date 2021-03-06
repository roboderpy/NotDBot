

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

const child_process = require('child_process');
const spawn = child_process.spawn;
const URL = require('url');
const unirest = require('unirest');
const fs = require('fs');

Util.mkdir(DBot.WebRoot + '/reflect');

const allowed = [
	'jpeg',
	'jpg',
	'png',
	'tif',
	'bmp',
];

let fn = function(name, toUse) {
	return function(args, cmd, msg) {
		let url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', name, args, 1);
		
		let hash = String.hash(url);
		
		let ext = DBot.ExtraxtExt(url);
		let fPath;
		let fPathProcessed = DBot.WebRoot + '/reflect/' + hash + '_' + toUse + '.' + ext;
		let fPathProcessedURL = DBot.URLRoot + '/reflect/' + hash + '_' + toUse + '.' + ext;
		
		msg.channel.startTyping();
		
		let ContinueFunc = function() {
			if (msg.checkAbort()) return;
			fs.stat(fPathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat && stat.isFile()) {
					msg.channel.stopTyping();
					msg.reply(fPathProcessedURL);
				} else {
					let magik = spawn('bash', ['./resource/scripts/reflect', fPath]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						if (code == 0) {
							fs.rename('./' + hash + '_right.' + ext, DBot.WebRoot + '/reflect/' + hash + '_right.' + ext, function() {
								fs.rename('./' + hash + '_left.' + ext, DBot.WebRoot + '/reflect/' + hash + '_left.' + ext, function() {
									fs.rename('./' + hash + '_blend.' + ext, DBot.WebRoot + '/reflect/' + hash + '_blend.' + ext, function() {
										msg.channel.stopTyping();
										msg.reply(fPathProcessedURL);
									});
								});
							});
						} else {
							msg.reply('*DED*');
						}
					});
				}
			});
		}
		
		CommandHelper.loadImage(url, function(newPath) {
			fPath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	}
}

module.exports = {
	name: 'waaw',
	alias: ['mirror', 'mirrorright'],
	
	help_args: '<url>',
	desc: 'Reflects image at vertical. Displays only **right** side of image',
	allowUserArgument: true,
	delay: 2,
	
	func: fn('waaw', 'right'),
}

DBot.RegisterCommand({
	name: 'haah',
	alias: ['mirrorleft'],
	
	help_args: '<url>',
	desc: 'Reflects image at vertical. Displays only **left** side of image',
	allowUserArgument: true,
	delay: 2,
	
	func: fn('haah', 'left'),
});

DBot.RegisterCommand({
	name: 'vblend',
	
	help_args: '<url>',
	desc: 'Reflects image at vertical. Displays both sides of image by blending them',
	allowUserArgument: true,
	delay: 2,
	
	func: fn('vblend', 'blend'),
});

// Using Mirrorize

let fn2 = function(name, toUse, dir) {
	return function(args, cmd, msg) {
		let url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', name, args, 1);
		
		let hash = String.hash(url);
		
		let fPath;
		let fPathProcessed = DBot.WebRoot + '/reflect/' + hash + '_' + toUse + '.png';
		let fPathProcessedURL = DBot.URLRoot + '/reflect/' + hash + '_' + toUse + '.png';
		
		msg.channel.startTyping();
		
		let ContinueFunc = function() {
			if (msg.checkAbort()) return;
			fs.stat(fPathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat && stat.isFile()) {
					msg.channel.stopTyping();
					msg.reply(fPathProcessedURL);
				} else {
					let magik = spawn('bash', ['./resource/scripts/mirrorize', '-r', dir, fPath, fPathProcessed]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						if (code == 0) {
							msg.reply(fPathProcessedURL);
						} else {
							msg.reply('Uh oh! You are trying to break me ;n; Why? ;n;');
						}
						
						msg.channel.stopTyping();
					});
				}
			});
		}
		
		CommandHelper.loadImage(url, function(newPath) {
			fPath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	};
}

DBot.RegisterCommand({
	name: 'woow',
	
	help_args: '<url>',
	desc: 'Reflects image at horisontal. Displays only **top** side of image',
	allowUserArgument: true,
	delay: 2,
	
	func: fn2('woow', 'up', 'North'),
});

DBot.RegisterCommand({
	name: 'hooh',
	
	help_args: '<url>',
	desc: 'Reflects image at horisontal. Displays only **down** side of image',
	allowUserArgument: true,
	delay: 2,
	
	func: fn2('hooh', 'down', 'south'),
});

let fn3 = function(name) {
	return function(args, cmd, msg) {
		let url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', name, args, 1);
		
		let hash = String.hash(url);
		
		let fPath;
		let fPathProcessed = DBot.WebRoot + '/reflect/' + hash + '_' + name + '.png';
		let fPathProcessedURL = DBot.URLRoot + '/reflect/' + hash + '_' + name + '.png';
		
		msg.channel.startTyping();
		
		let ContinueFunc = function() {
			if (msg.checkAbort()) return;
			fs.stat(fPathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat && stat.isFile()) {
					msg.channel.stopTyping();
					msg.reply(fPathProcessedURL);
				} else {
					let magik = spawn('convert', [fPath, '-' + name, fPathProcessed]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						if (code == 0) {
							msg.reply(fPathProcessedURL);
						} else {
							msg.reply('Uh oh! You are trying to break me ;n; Why? ;n;');
						}
						
						msg.channel.stopTyping();
					});
				}
			});
		}
		
		CommandHelper.loadImage(url, function(newPath) {
			fPath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	}
}

DBot.RegisterCommand({
	name: 'flip',
	
	help_args: '<url>',
	desc: 'Flips an image',
	allowUserArgument: true,
	delay: 2,
	
	func: fn3('flip'),
});

DBot.RegisterCommand({
	name: 'flop',
	
	help_args: '<url>',
	desc: 'Flops an image',
	allowUserArgument: true,
	delay: 2,
	
	func: fn3('flop'),
});

