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

    },
    Aluno:{

    },
    Bibliotecario:{
        
    },
    DataDev:{
        type:Date,
        require:true
    },

})
module.exports = mongoose.model('Emprestimo',schema,'emprestimos')