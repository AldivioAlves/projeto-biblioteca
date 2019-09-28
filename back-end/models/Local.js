const mongoose = require('mongoose')


const schema = mongoose.Schema({
    idLocal:{
        type:Number,
        require:true
    },

    Corredor:{
        type:Number,
        require:true
  
    },
    Estante:{
        type:Number,
        require:true
        
    },
    Prateleira:{
        type:Number,
        require:true
    }
    
})
module.exports = mongoose.model('Local',schema,'locais')