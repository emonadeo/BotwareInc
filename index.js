const http = require('http');

const server = require('./server/server');
const bot = require('./bot/bot');

// Start Server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`SERVER: Listening on port ${PORT}`);
});

// Discord Bot Ready Message
bot.on('ready', () => {
    console.log(`BOT: Logged in as '${bot.user.tag}'`);
});
// Start Discord Bot
bot.login(process.env.TOKEN);

// Keep App Alive
setInterval(() => {
    http.get(process.env.DOMAIN);
}, 280000);
