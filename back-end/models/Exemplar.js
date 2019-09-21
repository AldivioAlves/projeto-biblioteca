const mongoose = require('mongoose')

const schema = mongoose.Schema({
    codigo:{
        type:String,
        require:true
    },
    corredor:{
        type:Number,
        require:true
    },
    estante:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model('Exemplar',schema,'exemplar')