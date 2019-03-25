const discord = require('discord.js');

const cmds = require('./commands');

// Command Prefix
const cmdPrefix = '!';

// Initialize Discord Client
const bot = new discord.Client();

// Message Event
bot.on('message', msg => {
    if(!(msg.content.charAt(0) === cmdPrefix))
        return; // Message not starting with 'cmdPrefix'

    // Split command into arguments
    let args = msg.content.split(' ');
    let cmd = args[0].substring(1);
    args.shift();

    if(!cmds.hasOwnProperty(cmd))
        return; // Command not recognized

    // Execute Command
    cmds[cmd].cmd(msg, cmd, args);
});

module.exports = bot;
