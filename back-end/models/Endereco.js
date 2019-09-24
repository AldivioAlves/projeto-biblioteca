const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idEndereco:{
        type:Number,
        require:true
    },
    idDonoEndereco:{

    },

    logadouro:{
        type:String,
        require:true
    },
    nomeLogadouro:{
        type:String,
        require:true
    },
    numero:{
        type:Number,
        require:true
    },
    bairro:{
        type:String,
        require:true
    },
    cidade:{
        type:String,
        require:true
    },
    uf:{
        type:String,
        require:true
    },
    cep:{
        type:String,
        require:true
    },
    tipo:{
        type:String
    }


})
module.exports = mongoose.model('Endereco',schema,'enderecos')
