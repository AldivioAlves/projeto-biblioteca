const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idAtivo:{
        type:Number,
        require:true
    }, 
    Tipo:{
        type:String,
        require:true
    },
    Nome:{
        type:String,
        require:true
    },
    Autor:{
        type:String,
        require:true
    },
    Editora:{

    },
    Descricao:{
        type:String
    },
    Ano:{
        type:Date

    },
    Edicao:{
        type:Number
    },
    Isbn:{
        type:Number
    },
    Tombo:{

    },
    QtDisponivel:{
        type:Number,
        require:true
    },
    Local:{
        
    }

})
module.exports = mongoose.model('Ativo',schema,'ativo')