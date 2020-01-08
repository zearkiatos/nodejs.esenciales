/* eslint-disable linebreak-style */
module.exports = function (app) {
  app.get('/profile/:user', (request, response) => {
    response.send(`Hola, estoy en el perfil de ${request.params.user}`);
  });
};
