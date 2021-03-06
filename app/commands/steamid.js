

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

if (!DBot.cfg.steam_enable) return;

const apiBase = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + DBot.cfg.steam + '&steamids=';
const resolveBase = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=' + DBot.cfg.steam + '&vanityurl=';
const unirest = require('unirest');
const BigNumber = require('bignumber.js');

const SteamIDTo64 = function(id) {
	let server = 0;
	let AuthID = 0;
	
	let split = id.split(':');
	
	server = Number.from(split[1]);
	AuthID = Number.from(split[2]);
	
	let Mult = AuthID * 2;
	
	let one = new BigNumber('76561197960265728');
	let two = new BigNumber(Mult);
	let three = new BigNumber(server);
	
	return one.plus(two).plus(three).toString(10);
};

const SteamIDFrom64 = function(id) {
	let newNum = new BigNumber(id);
	let num = Number.from(newNum.minus(new BigNumber('76561197960265728')).toString(10));
	
	let server = num % 2;
	num = num - server;
	
	return 'STEAM_0:' + server + ':' + (num / 2);
};

const SteamIDTo3 = function(id) {
	let server = 0;
	let AuthID = 0;
	
	let split = id.split(':');
	
	server = Number.from(split[1]);
	AuthID = Number.from(split[2]);
	
	return '[U:1:' + (AuthID * 2 + server) + ']';
};

const SteamIDFrom3 = function(id) {
	let sub = id.substr(1, id.length - 2);
	let split = sub.split(':');
	
	let uid = Number.from(split[2]);
	if (!uid)
		return false;
	
	let server = uid % 2;
	uid = uid - server;
	
	return 'STEAM_0:' + server + ':' + (uid / 2);
};

let manipulateRegExp = new RegExp('/', 'g');
const usualProfileStart = 'https://steamcommunity.com/profiles/';
const idProfileStart = 'https://steamcommunity.com/id/';

module.exports = {
	name: 'steamid',
	alias: ['steam'],
	
	help_args: '<steamid>',
	desc: 'Get a SteamID infos',
	
	func: function(args, cmd, msg) {
		if (!args[0])
			return DBot.CommandError('Argument must be a valid SteamID, SteamID3, SteamID64 or Custom profile URL','steamid', args, 1);
		
		let toManipulate = args[0];
		toManipulate = toManipulate
			.replace('http://steamcommunity.com/id/', '')
			.replace('https://steamcommunity.com/id/', '')
			.replace('https://steamcommunity.com/profile/', '')
			.replace('http://steamcommunity.com/profile/', '')
			.replace(manipulateRegExp, '');
		
		let validID = Number.from(toManipulate);
		
		let SteamID = '';
		let SteamID3 = '';
		let SteamID64 = '';
		let CustomProfileURL = '';
		
		msg.channel.startTyping();
		
		let continueFunc = function() {
			msg.channel.stopTyping();
			let output = '\n';
			
			output += 'Player SteamID(32): `' + SteamID + '`\n';
			output += 'Player SteamID3: `' + SteamID3 + '`\n';
			output += 'Player SteamID64: `' + SteamID64 + '`\n';
			output += 'Player Profile URL: ' + usualProfileStart + SteamID64 + '\n';
			
			if (CustomProfileURL.substr(0, 4) !== 'http')
				output += 'Player Profile Custom URL: ' + idProfileStart + SteamID64 + '\n';
			
			msg.reply(output);
		};
		
		let getFunc = function(id) {
			Postgres.query('SELECT * FROM steamid_fail WHERE "STEAMID64" = ' + Postgres.escape(id) + '', function(err, data2) {
				if (err) {
					msg.channel.stopTyping();
					console.error(err);
					return;
				}
				
				if (data2[0]) {
					msg.channel.stopTyping();
					msg.reply('No such Steam account: ' + id);
					return;
				}
				
				Postgres.query('SELECT * FROM steamid WHERE "STEAMID64" = ' + Postgres.escape(id) + '', function(err, data) {
					if (data && data[0]) {
						SteamID = data[0].STEAMID;
						SteamID64 = data[0].STEAMID64;
						SteamID3 = data[0].STEAMID3;
						CustomProfileURL = data[0].CUSTOMID;
						continueFunc();
					} else {
						unirest.get(apiBase + id)
						.end(function(result) {
							let data = result.body.response.players;
							
							if (!data[0]) {
								Postgres.query('INSERT INTO steamid_fail ("STEAMID64") VALUES (' + Postgres.escape(id) + ')');
								msg.reply('No such steam account: ' + id);
								msg.channel.stopTyping();
								return;
							}
							
							let ply = data[0];
							let profileurl = ply.profileurl;
							let steamid = SteamIDFrom64(id);
							let steamid3 = SteamIDTo3(steamid);
							
							let profile = profileurl.replace(idProfileStart, '').replace('/', '');
							CustomProfileURL = profile;
							
							SteamID = steamid;
							SteamID3 = steamid3;
							SteamID64 = id;
							
							Postgres.query('INSERT INTO steamid VALUES\
							(' + Postgres.escape(SteamID64) + ', ' + Postgres.escape(SteamID) + ', ' + Postgres.escape(SteamID3) + ', ' + Postgres.escape(profile) + ') ON CONFLICT ("STEAMID64") DO UPDATE SET\
							"STEAMID64" = ' + Postgres.escape(SteamID64) + ',\
							"STEAMID" = ' + Postgres.escape(SteamID) + ',\
							"STEAMID3" = ' + Postgres.escape(SteamID3) + ',\
							"CUSTOMID" = ' + Postgres.escape(profile));
							
							continueFunc();
						});
					}
				});
			});
		};
		
		if (toManipulate.substr(0, 2) === '[U') {
			// assume this is SteamID3
			let steamid = SteamIDTo64(SteamIDFrom3(toManipulate));
			getFunc(steamid);
		} else if (toManipulate.substr(0, 7) === 'STEAM_0') {
			// assume this is SteamID
			let steamid = SteamIDTo64(toManipulate);
			getFunc(steamid);
		} else if (validID) {
			// assume this is SteamID64
			getFunc(toManipulate);
		} else {
			// assume this is Custom Steam Profile
			
			Postgres.query('SELECT * FROM steamid_fail WHERE "CUSTOMID" = ' + Postgres.escape(toManipulate), function(err, data2) {
				if (data2[0]) {
					msg.channel.stopTyping();
					msg.reply('No such Steam account: ' + toManipulate);
					return;
				}
				
				Postgres.query('SELECT * FROM steamid WHERE "CUSTOMID" = ' + Postgres.escape(toManipulate), function(err, data) {
					if (data && data[0]) {
						SteamID = data[0].STEAMID;
						SteamID64 = data[0].STEAMID64;
						SteamID3 = data[0].STEAMID3;
						CustomProfileURL = data[0].CUSTOMID;
						continueFunc();
					} else {
						unirest.get(resolveBase + encodeURIComponent(toManipulate))
						.end(function(result) {
							let res = result.body;
							
							if (!res.response || res.response.success === 42) {
								Postgres.query('INSERT INTO steamid_fail ("CUSTOMID") VALUES (' + Postgres.escape(toManipulate) + ')');
								msg.reply('No such Steam account: ' + toManipulate);
								msg.channel.stopTyping();
							} else {
								let uid = res.response.steamid;
								
								getFunc(uid);
							}
						});
					}
				});
			});
		}
	}
};

