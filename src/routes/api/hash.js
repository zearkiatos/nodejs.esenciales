/* eslint-disable linebreak-style */
const hash = require('../../utils/hash');
const API_PATH = '/api';
module.exports = (app) => {
  app.get(`${API_PATH}/hash`, (request, response) => {
    const pass = hash.pass('This is a test!');
    response.send(pass.toString());
  });

  app.get(`${API_PATH}/hola`, (request, response) => {
    response.send('Hola');
  });
};
