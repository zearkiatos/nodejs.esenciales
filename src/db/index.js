/* eslint-disable linebreak-style */
const mongo = require('./connect');
const { DB_NAME } = require('./config');

module.exports = {
  getPokemons() {
    const db = mongo.instance().db(DB_NAME);
    const result = db
      .collection('pokemon')
      .find()
      .toArray();
    return result;
  },
  getPokemonByID(id) {
    const db = mongo.instance().db(DB_NAME);
    const result = db
      .collection('pokemon')
      .find({ id })
      .toArray();
    return result;
  },
  getPokemonByName(name) {
    const db = mongo.instance().db(DB_NAME);
    const result = db
      .collection('pokemon')
      .find({ name })
      .toArray();
    return result;
  },
  postPokemon(pokemon) {
    const db = mongo.instance().db(DB_NAME);
    const result = db.collection('pokemon').insertOne(pokemon);
    return result;
  },
  deletePokemonByName(name) {
    const db = mongo.instance().db(DB_NAME);
    const result = db.collection('pokemon').deleteOne({ name });
    return result;
  },
};
