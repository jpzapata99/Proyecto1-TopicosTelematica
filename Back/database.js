const mongoose = require('mongoose')

const URI = 'mongodb://localhost/registros-sensores'

mongoose.connect(URI,{useNewUrlParser: true,'useUnifiedTopology': true })
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err))
mongoose.set('useCreateIndex', true);

module.exports = mongoose