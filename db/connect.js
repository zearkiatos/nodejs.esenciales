/* eslint-disable linebreak-style */
const { MongoClient } = require('mongodb');
const config = require('./config');

const connString = `mongodb://root:root@${config.DB_HOST}:${config.DB_PORT}`;
let instance = null;
let isDisconnecting = false;
console.log(connString);
module.exports = {
  connect: () => new Promise((resolve, reject) => {
    MongoClient.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin' }, (
      err,
      client,
    ) => {
      console.log(client);
      if (err) {
        reject(err);
      }
      console.log('Conectado satisfactoriamente al servidor de Mongo! 🟢');
      instance = client;
      resolve(client.db(config.DB_NAME));
    });
  }),
  disconnect: () => {
    if (!instance && !isDisconnecting) {
      isDisconnecting = true;
      console.log('Desconectando instancia de Mongo 🔌 🔴');
      return new Promise((resolve, reject) => {
        instance.close((err) => {
          if (err) {
            reject(err);
            isDisconnecting = false;
            return;
          }
          console.log('Instancia de Mongo desconectada 🔌 🔴');
          resolve();
        });
      });
    }
    return null;
  },
  instance: () => instance,
};
