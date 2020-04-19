function handleErrors(err = {}) {
  console.error('Error:', err);

  switch (err.error) {
    case 'missing_scope':

    case 'invalid_auth':

    case 'channel_not_found':

  }
}

module.exports = {
  handleErrors,
};
