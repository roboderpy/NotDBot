

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
const fs = require('fs');

Util.mkdir(DBot.WebRoot + '/triggered');

module.exports = {
	name: 'triggered',
	
	allowUserArgument: true,
	
	help_args: '<url or user>',
	desc: '<TRIGGERED>',
	
	func: function(args, cmd, msg) {
		let url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', 'triggered', args, 1);
		
		let sha = String.hash(url);
		
		let fpath;
		let fpathProcessed = DBot.WebRoot + '/triggered/' + sha + '.gif';
		let fpathProcessedPrepare = DBot.WebRoot + '/triggered/' + sha + '_pre.png';
		let fpathU = DBot.URLRoot + '/triggered/' + sha + '.gif';
		
		msg.channel.startTyping();
		
		let ContinueFunc2 = function() {
			if (msg.checkAbort()) return;
			fs.stat(fpathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat) {
					msg.channel.stopTyping();
					msg.reply(fpathU);
				} else {
					let magik = spawn('convert', [
						'-size', '512x580!',
						'canvas:white',
						'-resize', '512x580!',
						'-draw', 'image srcover -60,-60 0,0 "' + fpathProcessedPrepare + '"',
						'-draw', 'image srcover -5,470 0,0 "./resource/files/triggered.png"',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -30,-50 0,0 "' + fpathProcessedPrepare + '"',
							'-draw', 'image srcover -40,490 0,0 "./resource/files/triggered.png"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -50,-35 0,0 "' + fpathProcessedPrepare + '"',
							'-draw', 'image srcover -15,480 0,0 "./resource/files/triggered.png"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -35,-70 0,0 "' + fpathProcessedPrepare + '"',
							'-draw', 'image srcover -20,460 0,0 "./resource/files/triggered.png"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -70,-60 0,0 "' + fpathProcessedPrepare + '"',
							'-draw', 'image srcover -5,495 0,0 "./resource/files/triggered.png"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -30,-70 0,0 "' + fpathProcessedPrepare + '"',
							'-draw', 'image srcover -15,480 0,0 "./resource/files/triggered.png"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -50,-60 0,0 "' + fpathProcessedPrepare + '"',
							'-draw', 'image srcover -35,495 0,0 "./resource/files/triggered.png"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -10,-30 0,0 "' + fpathProcessedPrepare + '"',
							'-draw', 'image srcover -25,500 0,0 "./resource/files/triggered.png"',
						')',
						
						'-channel', 'R',
						'-evaluate', 'multiply', '1.5',
						'-set', 'delay', '3',
						fpathProcessed
					]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						msg.channel.stopTyping();
						
						if (code == 0) {
							msg.reply(fpathU);
						} else {
							msg.reply('I am cracked up ;w;');
						}
					});
				}
			});
		}
		
		let ContinueFunc = function() {
			if (msg.checkAbort()) return;
			fs.stat(fpathProcessedPrepare, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat) {
					ContinueFunc2();
				} else {
					let magik = spawn('convert', [fpath, '-resize', '640', fpathProcessedPrepare]);
					
					magik.stdout.pipe(process.stdout);
					magik.stderr.pipe(process.stdout);
					
					magik.on('close', function(code) {
						if (code == 0) {
							ContinueFunc2();
						} else {
							msg.reply('I am cracked up ;w;');
							msg.channel.stopTyping();
						}
					});
				}
			});
		}
		
		CommandHelper.loadImage(url, function(newPath) {
			fpath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	},
}

DBot.RegisterCommand({
	name: 'triggered4',
	
	allowUserArgument: true,
	
	help_args: '<url or user>',
	desc: '<TRIGGERED>',
	
	func: function(args, cmd, msg) {
		let url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', 'triggered', args, 1);
		
		let sha = String.hash(url);
		
		let fpath;
		let fpathProcessed = DBot.WebRoot + '/triggered/' + sha + '.png';
		let fpathU = DBot.URLRoot + '/triggered/' + sha + '.png';
		
		msg.channel.startTyping();
		
		let ContinueFunc = function() {
			if (msg.checkAbort()) return;
			fs.stat(fpathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat) {
					msg.channel.stopTyping();
					msg.reply(fpathU);
				} else {
					let magik = spawn('magick', ['convert', '(', fpath, '-resize', '512', ')', './resource/files/triggered.jpg', '-append', fpathProcessed]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						msg.channel.stopTyping();
						
						if (code == 0) {
							msg.reply(fpathU);
						} else {
							msg.reply('I am cracked up ;w;');
						}
					});
				}
			});
		}
		
		CommandHelper.loadImage(url, function(newPath) {
			fpath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	},
});

DBot.RegisterCommand({
	name: 'triggered2',
	
	allowUserArgument: true,
	
	help_args: '<url or user>',
	desc: '<TRIGGERED> variation 2',
	
	func: function(args, cmd, msg) {
		let url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', 'triggered2', args, 1);
		
		let sha = String.hash(url);
		
		let fpath;
		let fpathProcessed = DBot.WebRoot + '/triggered/' + sha + '_2.png';
		let fpathU = DBot.URLRoot + '/triggered/' + sha + '_2.png';
		
		msg.channel.startTyping();
		
		let ContinueFunc = function() {
			if (msg.checkAbort()) return;
			fs.stat(fpathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat) {
					msg.channel.stopTyping();
					msg.reply(fpathU);
				} else {
					let magik = spawn('magick', ['convert', '(', fpath, '-resize', '512', '-motion-blur', '0x15', ')', './resource/files/triggered.jpg', '-append', fpathProcessed]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						msg.channel.stopTyping();
						
						if (code == 0) {
							msg.reply(fpathU);
						} else {
							msg.reply('I am cracked up ;w;');
						}
					});
				}
			});
		}
		
		CommandHelper.loadImage(url, function(newPath) {
			fpath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	},
});

DBot.RegisterCommand({
	name: 'triggered3',
	
	allowUserArgument: true,
	
	help_args: '<url or user>',
	desc: '<TRIGGERED> variation 3',
	
	func: function(args, cmd, msg) {
		let url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', 'triggered3', args, 1);
		
		let sha = String.hash(url);
		
		let fpath;
		let fpathProcessed = DBot.WebRoot + '/triggered/' + sha + '_3.gif';
		let fpathPre = DBot.WebRoot + '/triggered/' + sha + 'pre_3.png';
		let fpathU = DBot.URLRoot + '/triggered/' + sha + '_3.gif';
		
		msg.channel.startTyping();
		
		let ContinueFunc = function() {
			if (msg.checkAbort()) return;
			fs.stat(fpathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat) {
					msg.channel.stopTyping();
					msg.reply(fpathU);
				} else {
					let magik = spawn('convert', [
						fpath,
						'-resize', '680x680',
						'+write', fpathPre,
						'+delete',
						'-size', '512x680',
						'canvas:white',
						'-draw', 'image srcover -60,-60 0,0 "' + fpathPre + '"',
						'-draw', 'image srcover 0,512 0,0 "./resource/files/triggered.jpg"',
						
						'(',
							'-size', '512x680',
							'canvas:white',
							'-draw', 'image srcover -45,-50 0,0 "' + fpathPre + '"',
							'-draw', 'image srcover 0,512 0,0 "./resource/files/triggered.jpg"',
							
						')',
						
						'(',
							'-size', '512x680',
							'canvas:white',
							'-draw', 'image srcover -50,-45 0,0 "' + fpathPre + '"',
							'-draw', 'image srcover 0,512 0,0 "./resource/files/triggered.jpg"',
						')',
						
						'(',
							'-size', '512x680',
							'canvas:white',
							'-draw', 'image srcover -45,-65 0,0 "' + fpathPre + '"',
							'-draw', 'image srcover 0,512 0,0 "./resource/files/triggered.jpg"',
						')',
						
						'-set', 'delay', '2',
						fpathProcessed
					]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						msg.channel.stopTyping();
						
						if (code == 0) {
							msg.reply(fpathU);
						} else {
							msg.reply('I am cracked up ;w;');
						}
					});
				}
			});
		}
		
		CommandHelper.loadImage(url, function(newPath) {
			fpath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	},
});
