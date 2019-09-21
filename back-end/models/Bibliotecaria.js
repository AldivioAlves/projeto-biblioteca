const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome:{
        type:String,
        require:true
    },
    cpf:{
        type:String,
        require:true
    },
    registro:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('Bibliotecaria',schema,'bibliotecarias')
