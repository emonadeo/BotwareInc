const help = require('./commands/help');
const changelog = require('./commands/changelog');

// Command Registry containing additional information
module.exports = {
    help: {
        cmd: help,
        description: 'Prints all available commands'
    },
    changelog: {
        cmd: changelog,
        description: 'Summary of the latest game version'
    }
};