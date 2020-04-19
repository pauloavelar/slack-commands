const { respond } = require('../../helpers/http');
const { parsePayload } = require('../../helpers/parsers');
const { isRequestValid } = require('../../helpers/validators');

async function onChannelCommand(event) {
  if (!isRequestValid(event)) {
    return respond('Forbidden', 403);
  }

  const payload = parsePayload(event.body);
  return respond({
    response_type: 'in_channel',
    text: `It's 80 degrees right now.`,
  });
}

module.exports = {
  onChannelCommand,
};
