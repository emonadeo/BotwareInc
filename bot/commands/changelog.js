const axios = require('axios').default;
const xml2js = require('xml2js');

const steam = require('../../server/webhooks/steam');

module.exports = async (msg, cmd, args) => {
    let res = await axios.get('https://steamcommunity.com/games/362620/rss/Software_Inc/');
    xml2js.parseString(res.data, (err, xml) => {
        const item = xml.rss.channel[0].item[0];
        const data = {
            'EntryTitle': item.title[0],
            'EntryURL': item.link[0],
            'EntryContent': item.description[0],
            'EntryPublished': 'null'
        };
        const embed = steam.convert(data, false);
        msg.channel.send({embed});
    });
};