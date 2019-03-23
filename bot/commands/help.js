module.exports = (msg, cmd, args) => {
    const cmds = require('../commands');
    let help = '';
    for(let label in cmds) {
        if(label !== 'help') {
            help += `\`!${label}\` — ${cmds[label].description}\n`;
        }
    }
    msg.channel.send(help);
};