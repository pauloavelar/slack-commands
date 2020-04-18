function respond(body) {
  return {
    statusCode: 200,
    body: prepareResponseBody(body),
  };
}

function prepareResponseBody(body) {
  if (!body) {
    return '';
  }

  if (typeof body === 'object') {
    return JSON.stringify(body);
  }

  return body;
}

module.exports = {
  respond,
};
