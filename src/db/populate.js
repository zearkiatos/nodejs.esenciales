/* eslint-disable linebreak-style */
/* eslint-disable import/no-dynamic-require */
const { argv } = require('yargs');
const mongo = require('./connect');

const collection = 'pokemon';
const resources = require(`../resources/${collection}`);
const data = resources.results;

if (argv.fill) {
  mongo.connect().then((db) => {
    db.collection(collection).insertMany(data, (err) => {
      if (err) throw err;
      console.log('Los datos han sido insertados satisfactoriamente! 🆗');
      mongo.disconnect();
    });
  });
}

if (argv.clear) {
  mongo.connect().then((db) => {
    db.collection(collection).drop((err) => {
      if (err) throw err;
      console.log('La collección se ha descartado satisfactoriamente! 🆗');
      mongo.disconnect();
    });
  });
}
