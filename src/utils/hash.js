/* eslint-disable linebreak-style */
const crypto = require('crypto');

module.exports = {
  pass(password) {
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha256');
    return hash;
  },
};
