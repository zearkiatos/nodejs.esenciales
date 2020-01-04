module.exports = function(app) {
  app.get("/", (request, response) => {
    response.send("Hola, estoy en la ruta '/'!");
  });
};
