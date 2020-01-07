const mongo = require("./connect");
const argv = require("yargs").argv;
const collection = "pokemon";
const data = require(`../resources/${collection}`).results;

if (argv.fill) {
  mongo.connect().then((db) => {
    db.collection(collection).insertMany(data, (err, result) => {
      if (err) throw err;
      console.log("Los datos han sido insertados satisfactoriamente! 🆗");
      mongo.disconnect();
    });
  });
  return;
}

if (argv.clear) {
  mongo.connect().then((db) => {
    db.collection(collection).drop((err, result) => {
      if (err) throw err;
      console.log("La collección se ha descartado satisfactoriamente! 🆗");
      mongo.disconnect();
    });
  });
  return;
}
