const express = require('express')
const morgan = require('morgan')
const app = express();
const path = require('path')
const { mongoose } = require('./database.js')
//Configuración
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
//Rutas
app.use('/api/registro',require('./routes/registers.routes.js'))
//Archivos estaticos
console.log(__dirname)
app.use(express.static(path.join(__dirname,'\Front\public')))

//Inicializando el servidor
app.listen(app.get('port'),()=>{
    console.log("VAAAAAAAAAAAAAAAAA")
    console.log(__dirname)
    console.log(`Server on port ${app.get('port')} `)
})