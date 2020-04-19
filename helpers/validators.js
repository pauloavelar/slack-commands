const crypto = require('crypto');

const signingSecret = process.env.SLACK_SIGNING_SECRET;

function isRequestValid({ body, headers }) {
  const timestamp = headers['X-Slack-Request-Timestamp'];
  const signature = headers['X-Slack-Signature'];

  if (!timestamp || !signature) {
    return false;
  }

  return signature === calculateSignature(timestamp, body);
}

function calculateSignature(timestamp, payload) {
  const hmac = crypto.createHmac('sha256', signingSecret);
  hmac.update(`v0:${timestamp}:${payload}`);
  return `v0=${hmac.digest('hex')}`;
}

module.exports = {
  isRequestValid,
};
