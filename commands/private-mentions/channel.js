const { respond } = require('../../helpers/http');
const { parsePayload } = require('../../helpers/parsers');
const { isRequestValid } = require('../../helpers/validators');
const { getToken } = require('../../services/credentials');
const { getConversationMembers } = require('../../services/conversations');

async function onChannelCommand(event) {
  if (!isRequestValid(event)) {
    return respond('Forbidden', 403);
  }

  const payload = parsePayload(event.body);
  const token = await getToken(payload.team_id);
  const conversationId = payload.channel_id;

  const members = await getConversationMembers(token, conversationId);

  return respond({
    response_type: 'in_channel',
    text: `Members found: ${members.map(m => `<@${m}>`).join(', ')}`,
  });
}

module.exports = {
  onChannelCommand,
};
