const Exemplar = require('../models/Exemplar')

const controller ={}

controller.novo = async function(req,res){
    try{
        await Exemplar.create(req.body)
        res.sendStatus(201).end()
    }catch(erro){
        console.error(erro)
        res.sendStatus(500)
    }
}

controller.listar = async function(req,res){
    try{
        const exemplares = await exemplares.find()
        res.send(exemplares)
    }catch(erro){
        console.error(erro)
        res.sendStatus(500).end()
    }
},

controller.obterUm = async function(req,res){
    const id= req.params.id
    try{
        const exemplar = await Exemplar.findById(id)
        if(exemplar){
            res.send(exemplar)
        }

    }catch(erro){
        console.error(erro)
        sendStatus(500).end()
    }

}
controller.atualizar = async function (req, res){
    const id = req.body_id
    try{
        const exemplar = await Exemplar.findById(id)
        if(exemplar){
            res.sendStatus(204).end()
        } else{
            res.sendStatus(404).end()
        }
    }catch(erro){
        console.error(erro)
        sendStatus(500).end()
    }
}

controller.excluir = async function (req, res){
    const id = req.body._id

    try{
        const exemplar = await Exemplar.findById(id)
        if(exemplar){
            res.sendStatus(204).end()
        }else{
            res.sendStatus(404).end()
        }
    }catch(erro){
        console.error(erro)
        sendStatus(404).end()
    }
}
module.exports = controller