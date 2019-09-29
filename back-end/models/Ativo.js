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
        type: mongoose.ObjectId,
        ref: 'Editora'

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
        type: Number,
        require:true
    

    },
    QtDisponivel:{
        type:Number,
        require:true
    },
    Local:{
        type: mongoose.ObjectId,
        ref: 'Local'
        
    }

})
module.exports = mongoose.model('Ativo',schema,'ativo')