const mongo = require("./connect");
const { DB_NAME } = require("./config");
module.exports = {
  getPokemons: function() {
    const db = mongo.instance().db(DB_NAME);
    const result = db
      .collection("pokemon")
      .find()
      .toArray();
    return result;
  },
  getPokemonByID: function(id) {
    const db = mongo.instance().db(DB_NAME);
    const result = db
      .collection("pokemon")
      .find({ id })
      .toArray();
    return result;
  },
  getPokemonByName: function(name) {
    const db = mongo.instance().db(DB_NAME);
    const result = db
      .collection("pokemon")
      .find({ name })
      .toArray();
    return result;
  },
  postPokemon: function(pokemon) {
    const db = mongo.instance().db(DB_NAME);
    const result = db.collection("pokemon").insertOne(pokemon);
    return result;
  },
  deletePokemonByName: function(name) {
    const db = mongo.instance().db(DB_NAME);
    const result = db.collection("pokemon").deleteOne({name});
    return result;
  }
};
