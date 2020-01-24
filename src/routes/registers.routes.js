const express = require('express')
const router = express.Router(); 
const Register = require ('./../models/Register')

router.get('/',async (req,res)=>{
    //let registers=[]
    //console.log(req.params.nombre)
    //if (req.params.nombre!=""){
    //    registers = await Register.find({"nombre": req.params.nombre})
    //}
    //else{
    const   registers =  await Register.find()
    //}
    console.log(registers)
    res.json(registers)   
})

router.post('/', async (req,res)=>{
    const { nombre, temperatura, humedad,longitud, latitud} = req.body
    const register = new Register({nombre, temperatura, humedad,longitud, latitud});
    console.log(register)
    await register.save()
    res.json("recibido")
})


module.exports = router; 