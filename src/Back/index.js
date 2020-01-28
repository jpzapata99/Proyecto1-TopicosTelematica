const express = require('express')
const morgan = require('morgan')
const app = express();
const path = require('path')
const { mongoose } = require('./database.js')
//Configuración
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
//Rutas
app.use('/api/registro',require('./routes/registers.routes.js'))
//Archivos estaticos
console.log(path.join(__dirname,'../Front/public/'))
app.use(express.static(path.join(__dirname,'../Front/public/')))

//Inicializando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')} `)
})