const mongoose = require('mongoose')


const schema = mongoose.Schema({
    IdItem:{
        type:Number,
        require:true
    },
    Nome:{

    },
    idTombo:{
        
    }, 
    QtEmprestimo:{

    }



})
module.exports = mongoose.model('ItensEmprestimo',schema,'itensEmprestimos')