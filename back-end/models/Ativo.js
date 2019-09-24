const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idAtivo:{
        type:Number,
        require:true
    },
    tipo:{
        type:String,
        require:true
    },
    nome:{
        type:String,
        require:true
    },
    Autor:{
        type:String,
        require:true
    },
    Editora:{
        type:String,
        
    },
    Descrisao:{
        type:String
    },
    ano:{
        type:Number
    },
    edicao:{
        type:String
    },
    isbn:{
        type:Number
    },
    tombo:{
        type:String,
        require:true
    },
    corredor:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model('Ativo',schema,'ativo')