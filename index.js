/* eslint-disable linebreak-style */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const mongo = require('./db/connect');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./routes/views')(app);
require('./routes/special')(app);
require('./routes/api')(app);

function closeApp() {
  mongo.disconnect().then(() => {
    process.exit(0);
  });
}
function initExpress() {
  console.log('Iniciando Express.js 🤖');
  app.listen(3000, () => {
    console.log('Express ha iniciado correctamente! ✅ 🚀');
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
