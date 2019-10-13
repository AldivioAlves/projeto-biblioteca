const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome:{
        type:String,
        require:true
    },
    senha:{
        type:Number,
        require:true
    }

})

module.exports = mongoose.model('Usuario',schema,'usuarios')