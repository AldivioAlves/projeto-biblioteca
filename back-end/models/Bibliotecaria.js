const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idBibliotecaria:{
        type:Number,
        require:true
    },
    Nome:{
        type:String,
        require:true
    },
    DtNascimento:{
        type:Date,
        require:true
    },
    Cpf:{
        type:String,
        require:true
    },
    Celular:{
        type:String,
        require:true
    },
    Telefone:{
        type:String
    },
    Endereco:{


    },

})

module.exports = mongoose.model('Bibliotecaria',schema,'bibliotecarias')
