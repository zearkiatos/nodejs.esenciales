const mongo = require("./connect");
const {DB_NAME} = require("./config");

module.exports = {
    postPokemon: function (pokemon) {
        const db = mongo.instance().db(DB_NAME);
        console.log()
        const result = db.collection("pokemon").insertOne(pokemon);
        return result;
    }
}