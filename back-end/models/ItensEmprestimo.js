const mongoose = require('mongoose')


const schema = mongoose.Schema({
 _id:{
     type:String

 },

    IdItem:{
        type:Number,
        require:true
        
    },
  
    idTombo:{
        type: mongoose.ObjectId,
        ref: 'Ativo'
        
    }, 
    QtEmprestimo:{
        type:Number,
        require:true,
        default:1
    },

    



})
module.exports = mongoose.model('ItensEmprestimo',schema,'itensEmprestimos')