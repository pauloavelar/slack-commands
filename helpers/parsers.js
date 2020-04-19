const qs = require('qs');

function parsePayload(payload) {
  return qs.parse(payload);
}

module.exports = {
  parsePayload,
};
