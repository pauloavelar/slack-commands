const http = require('../../helpers/http');

async function onChannelCommand(event, context) {
  return http.respond('Not yet implemented');
}

module.exports = {
  onChannelCommand,
};
