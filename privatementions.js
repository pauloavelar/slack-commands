const { onInstall } = require('./commands/private-mentions/install');
const { onChannelCommand } = require('./commands/private-mentions/channel');
const { onHereCommand } = require('./commands/private-mentions/here');

module.exports = {
  onInstall,
  onChannelCommand,
  onHereCommand,
};
