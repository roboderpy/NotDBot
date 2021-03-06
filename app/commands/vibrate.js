

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

Util.mkdir(DBot.WebRoot + '/vibrate');

module.exports = {
	name: 'vibrate',
	alias: ['vibrating'],
	
	allowUserArgument: true,
	
	help_args: '<url>',
	desc: '<vibrating ponies>',
	
	func: function(args, cmd, msg) {
		const url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', 'vibrate', args, 1);
		
		const sha = String.hash(url);
		
		let fpath;
		const fpathProcessed = DBot.WebRoot + '/vibrate/' + sha + '_vib.gif';
		const fpathProcessedPrepare = DBot.WebRoot + '/vibrate/' + sha + '_pre.png';
		const fpathU = DBot.URLRoot + '/vibrate/' + sha + '_vib.gif';
		
		msg.channel.startTyping();
		
		const ContinueFunc2 = function() {
			if (msg.checkAbort()) return;
			fs.stat(fpathProcessed, function(err, stat) {
				if (msg.checkAbort()) return;
				if (stat) {
					msg.channel.stopTyping();
					msg.reply(fpathU);
				} else {
					let magik = spawn('convert', [
						'-size', '512x620!',
						'canvas:white',
						'-resize', '512x620!',
						'-draw', 'image srcover -60,-60 0,0 "' + fpathProcessedPrepare + '"',
						
						'(',
							'canvas:white',
							'-size', '512x620!',
							'-draw', 'image srcover -45,-50 0,0 "' + fpathProcessedPrepare + '"',
							
						')',
						
						'(',
							'canvas:white',
							'-size', '512x620!',
							'-draw', 'image srcover -50,-45 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'(',
							'canvas:white',
							'-size', '512x620!',
							'-draw', 'image srcover -45,-65 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'-set', 'delay', '2',
						fpathProcessed
					]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						msg.channel.stopTyping();
						fs.unlink(fpathProcessedPrepare);
						
						if (code === 0) {
							msg.reply(fpathU);
						} else {
							msg.reply('I am cracked up ;w;');
						}
					});
				}
			});
		};
		
		const ContinueFunc = function() {
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
						if (code === 0) {
							ContinueFunc2();
						} else {
							msg.reply('I am cracked up ;w;');
							msg.channel.stopTyping();
						}
					});
				}
			});
		};
		
		CommandHelper.loadImage(url, function(newPath) {
			fpath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	}
};

DBot.RegisterCommand({
	name: 'shake',
	alias: ['shaking'],
	
	allowUserArgument: true,
	
	help_args: '<url>',
	desc: '<shaking ponies>',
	delay: 4,
	
	func: function(args, cmd, msg) {
		const url = CommandHelper.CombinedURL(args[0], msg.channel);
		
		if (!url)
			return DBot.CommandError('Invalid url maybe? ;w;', 'vibrate', args, 1);
		
		const sha = String.hash(url);
		
		let fpath;
		const fpathProcessed = DBot.WebRoot + '/vibrate/' + sha + '_shake.gif';
		const fpathProcessedPrepare = DBot.WebRoot + '/vibrate/' + sha + '_pre_shake.png';
		const fpathU = DBot.URLRoot + '/vibrate/' + sha + '_shake.gif';
		
		msg.channel.startTyping();
		
		const ContinueFunc2 = function() {
			fs.stat(fpathProcessed, function(err, stat) {
				if (stat) {
					msg.channel.stopTyping();
					msg.reply(fpathU);
				} else {
					let magik = spawn('convert', [
						'-size', '512x520!',
						'canvas:white',
						'-resize', '512x580!',
						'-draw', 'image srcover -60,-60 0,0 "' + fpathProcessedPrepare + '"',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -30,-50 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -50,-35 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -35,-70 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -70,-60 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -30,-70 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -50,-60 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'(',
							'-size', '512x580',
							'canvas:white',
							'-draw', 'image srcover -10,-30 0,0 "' + fpathProcessedPrepare + '"',
						')',
						
						'-set', 'delay', '3',
						fpathProcessed
					]);
					
					Util.Redirect(magik);
					
					magik.on('close', function(code) {
						msg.channel.stopTyping();
						fs.unlink(fpathProcessedPrepare);
						
						if (code === 0) {
							msg.reply(fpathU);
						} else {
							msg.reply('I am cracked up ;w;');
						}
					});
				}
			});
		};
		
		const ContinueFunc = function() {
			fs.stat(fpathProcessedPrepare, function(err, stat) {
				if (stat) {
					ContinueFunc2();
				} else {
					let magik = spawn('convert', [fpath, '-resize', '640', fpathProcessedPrepare]);
					
					magik.stdout.pipe(process.stdout);
					magik.stderr.pipe(process.stdout);
					
					magik.on('close', function(code) {
						if (code === 0) {
							ContinueFunc2();
						} else {
							msg.reply('I am cracked up ;w;');
							msg.channel.stopTyping();
						}
					});
				}
			});
		};
		
		CommandHelper.loadImage(url, function(newPath) {
			fpath = newPath;
			ContinueFunc();
		}, function(result) {
			msg.channel.stopTyping();
			msg.reply('Failed to download image. "HTTP Status Code: ' + (result.code || 'socket hangs up or connection timeout') + '"');
		});
	}
});
