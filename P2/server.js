require('dotenv').config()
const express = require('express')
const app = express()
const { appConfig } = require('./lib/config')
const foo = false
// Metodo GET en raiz

app.get('/', function(req, res) {

    res.send('Hola Mundo!');
    
    });
    
    // Metodo GET en una ruta
    
    app.get('/get', function (req, res) {
    
    res.send('GET de respuesta desde la ruta /get');
    
    });
    
    // Metodo POST en una ruta
    
    app.post('/post', function (req, res) {
    
    res.send('POST de respuesta desde la ruta /post');
    
    });
app.listen(appConfig.port, ()=> console.log('Puesto en marcha en puerto')) 