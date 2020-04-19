function respond(body, statusCode = 200) {
  return {
    statusCode,
    body: prepareResponseBody(body),
  };
}

function redirect(url) {

}

function addQueryParamsToUrl(url, queryParams) {
  if (!queryParams) {
    return url;
  }

  if (url.includes('?')) {
    return `${url}&${prepareQueryString(queryParams)}`;
  }

  return `${url}?${prepareQueryString(queryParams)}`;
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

function prepareQueryString(params = {}) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURI(value)}`)
    .join('&');
}

module.exports = {
  respond,
  redirect,
  addQueryParamsToUrl,
};
