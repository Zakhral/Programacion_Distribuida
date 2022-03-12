require('dotenv').config()
const express = require('express')
const app = express()
const { appconfig } = require('./lib/conf')
const connection = require('./db/mysql');

app.get('/', function(req, res) {
  res.sendfile('./views/index.html');
    let ts = Date.now();
    console.log(ts);
});

// connection.query('INSERT INTO db_name() VALUES ()')

app.listen(appconfig.port, ()=> console.log('Puesto en marcha en puerto${appconfig.port')) 