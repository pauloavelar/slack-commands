const { respond } = require('../../helpers/http');
const { parsePayload } = require('../../helpers/parsers');

async function onInstall(event) {
  console.log(JSON.stringify(event, null, 2));
  return respond('OK');
}

module.exports = {
  onInstall,
};
