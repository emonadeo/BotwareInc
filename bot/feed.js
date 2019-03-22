const bot = require('./bot');

exports.channels = {
    steam: '308553662974656513'
};

/**
 * Posts a feed item to a discord channel
 * @param channel integer
 * @param item rich-embed
 */
exports.post = function(channel, item) {
    bot.channels.get(channel).send({embed: item});
};
