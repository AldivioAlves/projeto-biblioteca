const Bibliotecaria= require('../models/Bibliotecaria')
const controller ={}

controller.novo = async function(req,res){
    try{
        await Bibliotecaria.create(req.body)

        res.sendStatus(201).end()

    }
    catch(erro){
        console.error(erro)
        res.sendStatus(500)

    }
     
}

controller.listar = async function(req,res){
    try{
        const bibliotecarias = await bibliotecarias.find()
        res.send(bibliotecarias)
    }
    catch(erro){
        console.error(erro)
        res.sendStatus(500).end()

    }
}

controller.obterUm = async function(req, res){
    const id = req.params.id
    try{
        const bibliotecaria = await Bibliotecaria.findById(id)
        if(bibliotecaria){
            res.send(bibliotecaria)
        }
    }
    catch(erro){
        console.error(erro)
        res.sendStatus(500).end()
    }
}

controller.atualizar = async function(req,res){
    const id = req.body._id
    try{
        const bibliotecaria = await SVGPathSegCurvetoCubicSmoothAbs.findByIdAndUpdate(id,req.body)
        if(bibliotecaria){
            res.sendStatus(204).end()
        }
        else{
            res.sendStatus(404).end()
        }
    }
    catch(erro){
        console.error(erro)
        res.sendStatus(500).end()

    }
    con
}
controller.excluir = async function (req,res){
    const id = req.body._id
    try{
        const bibliotecaria = await Bibliotecaria.findByIdAndDelete(id)
        if(bibliotecaria){
            res.sendStatus(204).end()
        }else{
            res.sendStatus(404).end()
        }

    }catch(erro){
        console.erro(erro)
        res.sendStatus(500).end()
    }
}

module.exports = controller
