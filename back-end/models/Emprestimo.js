const mongoose = require('mongoose')


const schema = mongoose.Schema({
    idEmprestimo:{
        type:Number,
        require:true
    },
    DtEmpre:{
        type:Date,
        require:true
    },
    Ativos:{
        type: mongoose.ObjectId,
        ref: 'ItensEmprestimo'

    },
    Aluno:{
        type: mongoose.ObjectId,
        ref: 'Aluno'
        

    },
    Funcionario:{
        type: mongoose.ObjectId,
        ref: 'Funcionario'
        
    },
    DataDev:{
        type:Date,
        require:true
    },

})
module.exports = mongoose.model('Emprestimo',schema,'emprestimos')