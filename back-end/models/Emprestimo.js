const mongoose = require('mongoose')


const schema = mongoose.Schema({
    idEmprestimo:{
        type:Number,
        require:true
    },
    data:{
        type:Date,
        require:true
    },
    idAtivos:{

    },
    idAluno:{

    },
    idBibliotecaria:{
        
    },
    dataDevolucao:{
        type:Date,
        require:true
    },

})
module.exports = mongoose.model('Emprestimo',schema,'emprestimos')