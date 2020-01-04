const API_PATH = "/api";
const pokemon = require("../../resources/pokemon");
module.exports = (app) => {
  app.get(`${API_PATH}/pokemon`, (request, response) => {
    response.json(pokemon.results);
  });
};
