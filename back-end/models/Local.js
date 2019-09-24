const mongoose = require('mongoose')


const schema = mongoose.Schema({
    idLocal:{
        type:Number,
        require:true
    },
    idAtivo:{
        
    },
    corredor:{
  
    },
    estante:{
   

    },
    prateleira:{

    }
    
})
module.exports = mongoose.model('Local',schema,'locais')