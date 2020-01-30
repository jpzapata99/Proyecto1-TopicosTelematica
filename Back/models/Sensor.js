const mongoose = require('mongoose')
const {Schema} = mongoose;

const Sensor = new Schema({
    nombre: {type:String, required:true,unique:true},
    apiKey: {type:String, required:true}
})

module.exports = mongoose.model('Sensor',Sensor)