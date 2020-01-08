/* eslint-disable linebreak-style */
module.exports = function (app) {
  app.get('*', (request, response) => {
    response.send('Route not defined!');
  });
};
