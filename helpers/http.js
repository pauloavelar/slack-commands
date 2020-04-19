function respond(body, statusCode = 200) {
  return {
    statusCode,
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
