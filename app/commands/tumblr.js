

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

if (!DBot.cfg.tumblr_enable) return;

const unirest = require('unirest');
const token = DBot.cfg.tumblr;
const urlBase = 'https://api.tumblr.com/v2/blog/';

module.exports = {
	name: 'tumblr',
	
	more: true,
	argNeeded: true,
	failMessage: 'Missing blog name',
	
	help_args: '<blog>',
	desc: 'Posts a random post from specified blog',
	
	func: function(args, cmd, msg, previousStuff) {
		let sha = String.hash(args[0]);
		msg.channel.startTyping();
		
		let continueFunc = function(posts) {
			msg.channel.stopTyping();
			
			try {
				if (!posts[0]) {
					msg.reply('Blog have no posts');
					return;
				}
				
				const rand = Array.Random(posts.filter(function(item) {
					return !previousStuff.includes(item.id);
				}));

				if (!rand) {
					msg.reply('None of valid posts found because i listed them all.\nDo you want to reset search history by }retry ?');
					return;
				}

				previousStuff.push(rand.id);
				
				const url = rand.post_url;
				const short_url = rand.surl;
				const summary = rand.summary;
				const image_permalink = rand.image_permalink;
				const date = rand.date;
				const tags = rand.tags;
				const title = rand.title;
				
				let output = '\n<' + short_url + '>';
				
				if (image_permalink) {
					output += '\n' + image_permalink;
				}
				
				if (date) {
					output += '\nAt ' + date;
				}
				
				if (tags) {
					output += '\nTags: ' + tags.join(', ');
				}
				
				if (title && title !== summary) {
					output += '\n' + title + '';
				}
				
				if (summary) {
					output += '\n```' + summary + '```';
				}
				
				msg.reply(output);
			} catch(err) {
				msg.reply('Uh oh ;n;');
				console.error(err);
			}
		};
		
		Postgres.query(`SELECT tumblr_cache.* FROM tumblr_cache, tumblr_bcache WHERE tumblr_cache.id = tumblr_bcache.id AND tumblr_bcache.blog = '${sha}' AND stamp > currtime() - 3600 ORDER BY "order" ASC`, function(err, data) {
			if (data.empty()) {
				Postgres.query(`INSERT INTO tumblr_bcache ("blog") VALUES ('${sha}') ON CONFLICT ("blog") DO UPDATE SET stamp = currtime() RETURNING id`, (err, data) => {
					unirest.get(urlBase + encodeURIComponent(args[0]) + '.tumblr.com/posts?api_key=' + token)
					.end(function(res) {
						if (res.body.meta.status !== 200) {
							msg.reply('Invalid blog');
							msg.channel.stopTyping();
							return;
						}
						
						let output = [];
						let i = 0;
						const uid = data.seek().id;

						for (const iEntry in res.body.response.posts) {
							const entry = res.body.response.posts[iEntry];
							i++;
							
							let imArray = [];
							
							if (entry.photos) {
								for (const imData of entry.photos) {
									imArray.push(Postgres.escape(imData.original_size.url));
								}
							}
							
							entry.images = imArray;
							entry.surl = entry.short_url;
							
							let imgStr = imArray.length !== 0 && ('ARRAY [' + imArray.join(',') + ']::VARCHAR(255)[]') || 'ARRAY []::VARCHAR(255)[]';
							
							output.push(`(${Postgres.escape(uid)}, ${Postgres.escape(i)},
							${Postgres.escape(entry.post_url)}, ${Postgres.escape(entry.short_url)}, ${Postgres.escape(entry.date)},
							${Postgres.escape(entry.summary)}, ${Postgres.escape(entry.post_author || args[0])},
							${Postgres.escape(entry.caption)}, ${imgStr}, ${sql.Array(entry.tags)}::VARCHAR(127)[],
							${Postgres.escape(entry.image_permalink)})`);
						}
						
						Postgres.query(`DELETE FROM tumblr_cache WHERE id = ${uid}; INSERT INTO tumblr_cache VALUES ${output.join(',')}`);
						continueFunc(res.body.response.posts);
					});
				});
				
				return;
			}
			
			continueFunc(data.rawRows);
		});
	}
};