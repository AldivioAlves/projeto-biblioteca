const mongoose = require('mongoose')


const schema = mongoose.Schema({
    idEditora:{
        type:Number,
        require:true
    },
    Nome:{
        type:String,
        require:true
    },
 
    Telefone:{
        type:String,
        require:true
    },
    Pais:{
        type:String,
     
    }

})
module.exports = mongoose.model('Editora',schema,'editoras')
