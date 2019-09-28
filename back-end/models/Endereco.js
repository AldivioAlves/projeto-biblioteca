const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idEndereco:{
        type:Number,
        require:true
    }, 
    TipoLogradouro:{
        type:String,
        require:true
    }, 
    Logradouro:{
        type:String,
        require:true
    }, 
    Numero:{
        type:Number,
        require:true
    },
    Bairro:{
        type:String,
        require:true
    }, 
    Cidade:{
        type:String,
        require:true
    }, 
    Uf:{
        type:String,
        require:true
    }, 
    Cep:{
        type:String,
        require:true
    }

})
module.exports = mongoose.model('Endereco',schema,'enderecos')
