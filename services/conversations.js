const fetch = require('node-fetch');

const { GET_CONVERSATION_INFO, GET_CONVERSATION_MEMBERS } = require('../config/urls');
const { addQueryParamsToUrl } = require('../helpers/http');
const { handleErrors } = require('../helpers/errors');

async function getConversationInfo(token, conversationId) {
  const url = addQueryParamsToUrl(GET_CONVERSATION_INFO, { token, channel: conversationId });
  const res = await fetch(url).then(res => res.json());

  if (!res.ok) {
    return handleErrors(res);
  }

  return res.channel;
}

async function getConversationMembers(token, conversationId) {
  const url = addQueryParamsToUrl(GET_CONVERSATION_MEMBERS, { token, channel: conversationId });
  const res = await fetch(url).then(res => res.json());

  if (!res.ok) {
    return handleErrors(res);
  }

  return res.members;
}

module.exports = {
  getConversationInfo,
  getConversationMembers,
};
