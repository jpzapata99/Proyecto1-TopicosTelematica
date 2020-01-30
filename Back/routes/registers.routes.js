const express = require('express')
const router = express.Router(); 
const Register = require ('./../models/Register')
const Sensor = require ('./../models/Sensor')

router.get('/:nombre',async (req,res,next)=>{
    let registers=[]
    console.log(req.params.nombre)
    if (req.params.nombre!="vacio"){
        registers = await Register.find({"nombre": req.params.nombre})
    }
    else{
        console.log("Llego donde era")
         registers =  await Register.find()
    }
    console.log(registers)
    res.json(registers)   
})

router.post('/', async (req,res,next)=>{
    const { nombre, temperatura, humedad,longitud, latitud,apiKey} = req.body
    const existApiKey =  async (nombre, apiKey)=>{
        const sensor = await Sensor.findOne({
            nombre:nombre
        })
        if(sensor){
            if(sensor.apiKey==apiKey){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    const resultado = await existApiKey(nombre,apiKey)
    if(resultado){
        const register = new Register({nombre, temperatura, humedad,longitud, latitud,apiKey});
        await register.save()
        res.json("¡Registro almacenado!")
    }else{
        res.json("ApiKey invalido")
    }
})

module.exports = router; 