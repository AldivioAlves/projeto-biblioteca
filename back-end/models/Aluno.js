const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idAluno:{
        type:Number,
        require:true
    },
    Nome:{
        type: String,
        required:true
    },
    DtNascimento:{
        type:Date,
        require:true

    },
    Cpf:{
        type:Number,
        require:true
    },
    Telefone:{
        type:String,
        require:true

    },
    Celular:{
        type:String
    },
    Endereço:{
        type: mongoose.ObjectId,
        ref: 'Endereco'
    },
    NomeMae:{
        type:String, 
        require: true
    }
 
})

module.exports = mongoose.model('Aluno',schema,'alunos')