const { Todolist } = require('../models/todolist')

exports.show = async (req,res) => {
    const id = req.params.id
    try{
        let value = await Todolist.where({ 'user_id' : id }).fetchAll({require:true})
        return res.status(200).send(value)
    }catch(e){
        return res.status(400).send(e)
    }
}

exports.add = async (req,res) => {
    const { description, status, user_id } = req.body
    try{
        let value = await Todolist.forge({
            todo_describ: description,
            todo_status: status,
            user_id: user_id
        }).save()
        return res.status(200).send(value)
    }catch(e){
        return res.status(400).send(e)
    }
}

exports.delete = async (req,res) => {
    const { id } = req.params
    try{
        let value = await Todolist.where('todo_id',id).destroy()
        return res.status(200).send(value)
    }catch(e){
        return res.status(400).send(e)
    };
}

exports.updatestatus = async (req,res) => {
    const { status, id } = req.body
    try{
        let value = await Todolist.where('todo_id',id).save(
            { todo_status:status },
            { patch: true }
        )
        res.status(200).send(value)
    }catch(e){
        return res.status(400).send(e)
    }
}