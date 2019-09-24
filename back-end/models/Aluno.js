const mongoose = require('mongoose')

const schema = mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    nome:{
        type: String,
        required:true
    },
    dataNascimento:{
        type:Date,
        require:true

    },
    cpf:{
        type:Number,
        require:true
    },
    telefone:{
        type:String,

    },
    celular:{
        type:String,
        require:true
    },
    endereço:{

    },
    nomeDaMae:{
        type:String
    }
 
})

module.exports = mongoose.model('Aluno',schema,'alunos')