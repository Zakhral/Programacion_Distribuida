require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5')
const { appconfig } = require('./lib/config')
const connection = require('./db/mysql.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/registro', function(req, res) {
    res.render('registro');
});

app.post('/registroUser', function(req, res) {
    if(req.body.registro == ""){
        let pass  = md5(req.body.pass) //Ciframos la contraseña.
        //Realizamos la query del insert de los datos enviados.
        connection.query('INSERT INTO users (username, email, pass) VALUES (?, ?, ?)',[req.body.username, req.body.email, pass], function(err, result, fields){
            
            if (err) throw err; //Si hay un error, lo muestra
            res.redirect('/')
            
        })
       }else{
        res.redirect('/')
       }
});

app.post('/auth', function(req, res) {

    if(req.body.sesion == ""){
    let pass = md5(req.body.pass)
       res.render('ingreso', {correo: req.body.email, pass: pass});
       }else{
           res.redirect('/registro')
       }
});

app.listen(appconfig.port, ()=> console.log(`Puesto en marcha en puerto ${appconfig.port}`)) ;