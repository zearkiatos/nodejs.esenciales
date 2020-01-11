/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-inner-declarations */
/* eslint-disable global-require */
/* eslint-disable linebreak-style */
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const express = require('express');
  const logger = require('morgan');
  const bodyParser = require('body-parser');

  const app = express();
  const mongo = require('./src/db/connect');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  require('./src/routes/views')(app);
  require('./src/routes/special')(app);
  require('./src/routes/api')(app);

  function closeApp() {
    mongo.disconnect().then(() => {
      process.exit(0);
    });
  }
  function initExpress() {
    console.log('Iniciando Express.js 🤖');
    app.listen(3002, () => {
      console.log(`Express con id ${cluster.worker.id} ha iniciado correctamente! ✅ 🚀`);
      process.on('SIGINT', closeApp);
      process.on('SIGTERM', closeApp);
    });
  }
  async function initMongo() {
    const db = await mongo.connect();
    if (db) {
      initExpress();
    }
  }

  initMongo();
}
