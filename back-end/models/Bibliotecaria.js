const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idBibliotecaria:{
        type:Number,
        require:true
    },
    nome:{
        type:String,
        require:true
    },
    dataNascimento:{
        type:Date,
        require:true
    },
    cpf:{
        type:String,
        require:true
    },
    celular:{
        type:String,
        require:true
    },
    telefone:{
        type:String
    },
    endereco:{


    },

})

module.exports = mongoose.model('Bibliotecaria',schema,'bibliotecarias')
