const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome:{
        type: String,
        required:true
    },
    curso:{
        type:String,
        require:true
    },
    cpf:{
        type:String,
        require:true
    },
    telefone:{
        type:String,
        
    },
    ra:{
        type:Number,
        require:true
    },
    endereco:{
        type:String,
        require:true
    } 
})

module.exports = mongoose.model('Aluno',schema,'alunos')