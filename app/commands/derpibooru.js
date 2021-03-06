

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

const http = require('https');
const unirest = require('unirest');
const url = require('url');
const urlBase = 'www.trixiebooru.org';

DBot.CreateTagsSpace('derpibooru', [
	'anthro',
	'grimdark',
	'suggestive',
	'plot',
	'butt',
	'questionable',
	'explicit',
	'fuck',
	'cum',
	'cock',
	'dick'
]);

const checkRepresentations = ['thumb_tiny', 'thumb_small', 'thumb', 'small', 'medium', 'large', 'tall'];

const serealizeImageData = function(data) {
	for (const rep of checkRepresentations) {
		data.representations[rep] = data.representations[rep] || null;
	}
	
	data.updated_at = data.updated_at || null;
	
	return `('${data.id}', '${data.created_at}',' ${data.updated_at}',
'${data.upvotes}', '${data.downvotes}', '${data.faves}',
${sql.Array(data.tags.split(', '))}, '${data.representations.thumb_tiny}', '${data.representations.thumb_small}',
'${data.representations.thumb}', '${data.representations.small}', '${data.representations.medium}',
'${data.representations.large}', '${data.representations.tall}', '${data.representations.full}')`;
};

const GetImage = function(ID, callback) {
	Postgres.query('SELECT * FROM derpibooru_pics WHERE id = ' + ID, function(err, data) {
		if (data.empty()) {
			unirest.get('https://' + urlBase + '/' + ID + '.json')
			.end(function(reply) {
				if (reply.status !== 200) {
					callback({}, ID);
					return;
				}
				
				if (reply.raw_body === '') {
					callback({}, ID, true);
					return;
				}
				
				const data = reply.body;
				const insert = `INSERT INTO derpibooru_pics VALUES ${serealizeImageData(data)}`;
				data.small = data.representations.small;
				data.medium = data.representations.medium;
				data.large = data.representations.large;
				data.full = data.representations.full;
				
				Postgres.query(insert);
				callback(data, ID);
			});
		} else {
			callback(data.seek(), ID);
		}
	});
};

const searchImages = function(keywords, callback) {
	let encode;
	
	for (const str of keywords) {
		if (!encode) {
			encode = encodeURIComponent(str);
		} else {
			encode += ' AND ' + encodeURIComponent(str);
		}
	}
	
	const hash = String.hash(encode);
	
	Postgres.query(`SELECT stamp FROM derpibooru_search WHERE derpibooru_search.phrase = ` + Postgres.escape(hash), function(err, data) {
		data.throw();
		
		const getFunc = function(recursion, page, imagesArray) {
			page = page || 1;
			if (page > 8) return;
			unirest.get('https://' + urlBase + '/search.json?q=' + encode + '&page=' + page)
			.end(function(response) {
				try {
					let data = response.body;
					if (!data) {
						if (!recursion) callback(null);
						return;
					}
					
					if (!data.search) {
						if (!recursion) callback([]);
						return;
					}
					
					let images = [];
					imagesArray = imagesArray || [];
					
					for (const im of data.search) {
						images.push(serealizeImageData(im));
						imagesArray.push(im.id);
						im.small = im.representations.small;
						im.medium = im.representations.medium;
						im.large = im.representations.large;
						im.full = im.representations.full;
					}
					
					if (images.length === 0) {
						if (!recursion) callback([]);
						return;
					}
					
					Postgres.query(`INSERT INTO derpibooru_pics VALUES ${images.join(',')} ON CONFLICT (id) DO UPDATE
										SET upvotes = excluded.upvotes, downvotes = excluded.downvotes, faves = excluded.faves`, (err) => {
						if (err) throw err;
						
						Postgres.query(`INSERT INTO derpibooru_search VALUES ('${hash}', ${Math.floor(CurTime())}, ARRAY [${imagesArray.join(',')}]::INTEGER[]) ON CONFLICT (phrase) DO UPDATE SET stamp = excluded.stamp, pics = excluded.pics`, (err) => {
							if (err) throw err;
							if (!recursion) callback(data.search);
							getFunc(true, page + 1, imagesArray);
						});
					});
				} catch(err) {
					console.log(err);
				}
			});
		};
		
		if (data.empty(getFunc)) return;
		const row = data.seek();
		if (row.stamp < (CurTime() - 3600)) {
			getFunc();
			return;
		}
		
		Postgres.query(`SELECT derpibooru_pics.* FROM derpibooru_pics, derpibooru_search WHERE derpibooru_search.phrase = ${Postgres.escape(hash)} AND derpibooru_pics.id = ANY(derpibooru_search.pics)`, (err, data) => {
			callback(data.rawRows);
		});
	});
};

const getRandomImage = function(callback) {
	let options = url.parse('https://' + urlBase + '/search?q=*&random_image=y.json');
	
	let req = http.request(options, function(response) {
		try {
			let location;
			
			for (let i in response.rawHeaders) {
				let opt = response.rawHeaders[i];
				
				if (opt === 'Location' || opt === 'location') {
					location = response.rawHeaders[Number(i) + 1];
					break;
				}
			}
			
			let split = location.split('/');
			let myID = split[split.length - 1];
			
			let split2 = myID.split('?');

			GetImage(split2[0], callback);
		} catch(err) {
			callback({}, -1);
		}
	});
	
	req.on('error', function(err) {
		callback({}, -1);
	});
	
	req.end();
};

let bannedChars = [
	'||',
	'AND',
	'OR',
	'&&',
	'!',
	'NOT'
];

module.exports = {
	name: 'derpibooru',
	alias: ['pbooru', 'dbooru', 'derpi'],
	
	argNeeded: false,
	delay: 3,
	more: true,
	
	help_args: '[tags/image ID]',
	desc: 'Posts link to a image from derpibooru.\nIf no tags specified, posts a random image',
	
	func: function(args, cmd, msg, previousStuff) {
		let ServerTags;
		let ClientTags = DBot.UserTags(msg.author, 'derpibooru');
		let ChannelTags;
		
		if (!DBot.IsPM(msg)) {
			ChannelTags = DBot.ChannelTags(msg.channel, 'derpibooru');
			ServerTags = DBot.ServerTags(msg.channel.guild, 'derpibooru');
		}
		
		let num = Number.from(args[0]);
		
		if (!args[0]) {
			let tries = 0;
			
			msg.channel.startTyping();
			
			let searchFunc;
			
			searchFunc = function() {
				if (msg.checkAbort()) return;
				tries++;
				
				if (tries >= 4) {
					msg.channel.stopTyping();
					msg.reply('Could not find an valid image. Maybe you or server banned most of valid tags');
					return;
				}
				
				getRandomImage(function(parse, myID) {
					if (msg.checkAbort()) return;
					if (myID === -1) {
						msg.channel.stopTyping();
						msg.reply('Derpibooru is down! Oh fuck.');
						return;
					}
					
					if (!parse) {
						msg.channel.stopTyping();
						msg.reply('Derpibooru is down!');
						return;
					}
					
					const data = parse;
					let target = parse.medium || parse.small || parse.full || parse.image;
					let split;
					
					if (typeof parse.tags === 'object')
						split = parse.tags;
					else
						split = parse.tags.split(', ');
					
					if (!DBot.channelIsNSFW(msg.channel, true)) {
						for (let i in split) {
							if ((ClientTags.isBanned(split[i]) || ServerTags && ServerTags.isBanned(split[i]) || ChannelTags && ChannelTags.isBanned(split[i]))) {
								searchFunc();
								return;
							}
						}
					}
					
					msg.channel.stopTyping();
					msg.reply(`Tags: \`${split.join(', ')}\`\nScore: \`${data.upvotes - data.downvotes} (${data.upvotes} vs ${data.downvotes})\`\nFaves: \`${data.faves}\`\n<https://${urlBase}/${data.id}>\nhttps:${target}`);
				});
			};
			
			searchFunc();
		} else if (num) {
			if (msg.checkAbort()) return;
			msg.channel.startTyping();
			
			GetImage(num, function(data, ID, isError) {
				if (msg.checkAbort()) return;
				if (isError) {
					msg.channel.stopTyping();
					msg.reply('Not a valid image ID!');
					return;
				}
				
				if (!data) {
					msg.channel.stopTyping();
					msg.reply('Derpibooru is down, or told me invalid phrase');
					return;
				}
				
				let target = data.medium || data.small || data.full || data.image;
				let split;
				
				if (typeof data.tags === 'object')
					split = data.tags;
				else
					split = data.tags.split(', ');
				
				if (!DBot.channelIsNSFW(msg.channel, true)) {
					for (let i in split) {
						if ((ClientTags.isBanned(split[i]) || ServerTags && ServerTags.isBanned(split[i]) || ChannelTags && ChannelTags.isBanned(split[i]))) {
							msg.reply('Image have tags that was blocked by server, channel or even you ;n; Next tag was banned: ' + split[i]);
							msg.channel.stopTyping();
							return;
						}
					}
				}
				
				msg.channel.stopTyping();
				msg.reply(`Tags: \`${split.join(', ')}\`\nScore: \`${data.upvotes - data.downvotes} (${data.upvotes} vs ${data.downvotes})\`\nFaves: \`${data.faves}\`\n<https://${urlBase}/${data.id}>\nhttps:${target}`);
			});
		} else {
			args.sort();

			for (let i in args) {
				args[i] = args[i].replace(/,/g, '');
			}
			
			for (const str of args) {
				for (const bk in bannedChars) {
					if (str.search(bannedChars[bk]) > 0) {
						msg.reply('Illegal charactets. AND, OR, NOT are also blocked. `derpi "bat pony" socks` will become into bat_pony AND socks.');
						return;
					}
					
					if (!DBot.channelIsNSFW(msg.channel, true)) {
						if ((ClientTags.isBanned(str) || ServerTags && ServerTags.isBanned(str) || ChannelTags && ChannelTags.isBanned(str))) {
							msg.reply('You are trying to search by tag that was blocked by server, channel, or even you. Next tag was banned: ' + str);
							return;
						}
					}
				}
			}
			
			msg.channel.startTyping();
			
			const continueLoad = function(parsed) {
				if (msg.checkAbort()) return;
				
				if (!parsed) {
					msg.channel.stopTyping();
					msg.reply('Derpibooru is down! Onoh!');
					return;
				}
				
				if (parsed.length === 0) {
					msg.reply('Sorry, no results');
					msg.channel.stopTyping();
					return;
				}
				
				const valids = [];
				
				for (const data of parsed) {
					let split;
					
					if (typeof data.tags === 'object')
						split = data.tags;
					else
						split = data.tags.split(', ');
					
					let hit = false;
					
					for (const tag of split) {
						if (ClientTags.isBanned(tag) || ServerTags && ServerTags.isBanned(tag) || ChannelTags && ChannelTags.isBanned(tag)) {
							hit = true;
							break;
						}
					}
					
					if (!hit) valids.push(data);
				}
				
				if (!valids[0]) {
					msg.reply('Sorry, no results');
					msg.channel.stopTyping();
					
					return;
				}
				
				const valids2 = [];
					
				for (const i2 of valids) {
					let hit = false;

					for (const i of previousStuff) {
						if (i === i2.id) {
							hit = true;
							break;
						}
					}

					if (!hit) valids2.push(i2);
				}
				
				if (!valids2[0]) {
					msg.channel.stopTyping();
					msg.reply('Oops! No more unique results!\nMight you want reset me by typing }derpibooru again?');
					return;
				}
				
				let data = Array.Random(valids2);
				let target = data.medium || data.small || data.full;
				
				previousStuff.push(data.id);
				
				let tagStr = data.tags;
				
				if (typeof tagStr === 'object')
					tagStr = data.tags.join(', ');
				
				msg.reply(`Tags: \`${tagStr}\`\nScore: \`${data.upvotes - data.downvotes} (${data.upvotes} vs ${data.downvotes})\`\nFaves: \`${data.faves}\`\n<https://${urlBase}/${data.id}>\nhttps:${target}`);
				
				msg.channel.stopTyping();
			};
			
			searchImages(args, continueLoad);
		}
	}
};
