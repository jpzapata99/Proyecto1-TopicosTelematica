const express = require('express')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const users = express.Router()
const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY ="secret"

users.post('/',(req,res,next)=>{
    const userData= {
        user:req.body.user,
        password:req.body.password
    }
    User.findOne({
        user:req.body.user
    })
    .then(user=>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                userData.password=hash
                User.create(userData)
                .then(user=>{
                    res.json({status:user.user+' resgistrado!'})
                })
                .catch(err=>{
                    res.send('err:' + err)
                })
            })
        }else{
            res.json({error:"Usuario ya está registrado"})
        }
    }).catch(err =>{
        res.send("error: "+err)
    })
})

users.post('/login', (req, res,next) => {
    User.findOne({
      user: req.body.user
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const payload = {
              _id: user._id
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          } else {
            res.json({ error: 'Rentifique la constraseña' })
          }
        } else {
          res.json({ error: 'El usuario no existe'})
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})


module.exports =users