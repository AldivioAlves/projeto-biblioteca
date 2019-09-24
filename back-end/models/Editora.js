const mongoose = require('mongoose')


const schema = mongoose.Schema({
    idEditora:{
        type:Number,
        require:true
    },
    nome:{
        type:String,
        require:true
    },
    endereco:{

    },
    telefone:{
        type:String,
        require:true
    },
    pais:{
        type:String,
        require:true
    }

})
module.exports = mongoose.model('Editora',schema,'editoras')
