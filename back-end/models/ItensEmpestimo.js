const mongoose = require('mongoose')


const schema = mongoose.Schema({
    idItensEmprestimos:{
        type:Number,
        require:true
    },

    idtombo:{

    },
    idAtivo:{

    },
    idItem:{

    }

})
module.exports = mongoose.model('ItensEmprestimo',schema,'itensEmprestimos')