const API_PATH = "/api";
const pokemons = require("../../resources/pokemon");
const {postPokemon} = require("../../db");
module.exports = (app) => {
  app.get(`${API_PATH}/pokemon`, (request, response) => {
    response.json(pokemons.results);
  });

  app.get(`${API_PATH}/pokemon/:name`, (request, response) => {
    const name = request.params.name;
    const pokemon = pokemons.results.find((pokemon) => pokemon.name === name);
    response.json(pokemon);
  });

  app.post(`${API_PATH}/pokemon`, async (request, response) => {
    try{
        const pokemon = request.body.pokemon;
        if (pokemon) {
            const result = await postPokemon(pokemon);
            return response.json(result);
        }
        response.status(400).send({reason: "No pokemon sent."})
    }
    catch(err){
        console.log(err);
    }
  });
};
