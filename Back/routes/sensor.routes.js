const express = require('express')
const router = express.Router(); 
const Sensor = require ('./../models/Sensor')

router.get('/:nombre',async (req,res,next)=>{
    console.log(req.params.nombre)
    sensors = await Sensor.find({"nombre": req.params.nombre})
    console.log(sensors)
    res.json(sensors)   
})

router.post('/',  (req,res,next)=>{
    const {nombre} = req.body
    Sensor.findOne({
        nombre:nombre    
    })
    .then(sensor=>{
        if(!sensor){
            console.log(nombre)
            const key = {"apiKey" : nombre+String(Math.floor(100000 + Math.random() * 900000))}
            const {apiKey} =  key
            const sensor = new Sensor({nombre,apiKey});
            sensor.save()
            res.json("¡Sensor registrado!. Su ApiKey es: "+ sensor.apiKey)
        }else{
            res.json("Este sensor ya está registrado.")
        }
    })
})

module.exports = router; 