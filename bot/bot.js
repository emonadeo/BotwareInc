const discord = require('discord.js');

// Require Token
const token = require('../token');

// Initialize Discord Client
const client = new discord.Client();

// Ready Message
client.on('ready', () => {
    console.log(`BOT: Logged in as '${client.user.tag}'`);
});

// Login
client.login(token);
