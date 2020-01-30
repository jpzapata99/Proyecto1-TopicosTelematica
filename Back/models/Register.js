const mongoose = require('mongoose')
const {Schema} = mongoose;

const Register = new Schema({
    nombre: {type:String, required:true},
    temperatura: {type:Number, required:true},
    humedad: {type:Number, required:true},
    longitud : {type:Number, required:true},
    latitud : {type:Number, required:true},
    apiKey : {type:String,required:true}
})

module.exports = mongoose.model('Register',Register)