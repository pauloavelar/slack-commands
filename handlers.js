const { onChannelCommand } = require('./commands/private-mentions/channel');
const { onHereCommand } = require('./commands/private-mentions/here');

module.exports = {
  onChannelCommand,
  onHereCommand,
};
