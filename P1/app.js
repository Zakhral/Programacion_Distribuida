require('dotenv').config()
const express = require('express')
const app = express()
const { appConfig } = require('./config/config')
const foo = false
 
app.listen(appConfig.port, ()=> console.log('Puesto en marcha en puerto')) 