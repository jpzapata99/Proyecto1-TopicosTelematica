const express = require('express')
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const { mongoose } = require('./database.js')
//Configuración
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.options('*', cors());
//Rutas
app.use('/api/user',require('./routes/user.routes.js'))
app.use('/api/registro',require('./routes/registers.routes.js'))
app.use('/api/sensor',require('./routes/sensor.routes.js'))
//Archivos estaticos
console.log(path.join(__dirname,'../Front/public/'))
//app.use(express.static(path.join(__dirname,'../Front/public/')))

//Inicializando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server on portt ${app.get('port')} `)
})