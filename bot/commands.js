const help = require('./commands/help');
const changelog = require('./commands/changelog');
const invite = require('./commands/invite');

// Command Registry containing additional information
module.exports = {
    help: {
        cmd: help,
        description: 'Prints all available commands'
    },
    changelog: {
        cmd: changelog,
        description: 'Summary of the latest game version'
    },
    invite: {
        cmd: invite,
        description: 'Get a permanent Discord Invite'
    }
};