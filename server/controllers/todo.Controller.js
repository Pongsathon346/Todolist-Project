const db = require('../config/database')

exports.show = (req,res) => {
    let id = req.params.id
    if(id!==undefined){
        const sql = 'SELECT * FROM todo_lists WHERE user_id = $1 ORDER BY todo_id DESC'
        db.query(sql,[id],(err,results) => {
            if(err){
                throw err
            }
            return res.status(200).json({data:results})
        })
    }
}

exports.add = (req,res) => {
    let description = req.body.description
    let status = req.body.status
    let user_id = req.body.user_id
    const sql = 'INSERT INTO todo_lists (todo_describ,todo_status,user_id) VALUES ($1,$2,$3)'
    db.query(sql,[description,status,user_id],(err,results) => {
        if(err){
            throw err
        }
        return res.status(200).json({data:results.rowCount})
    })
}

exports.delete = (req,res) => {
    let id = req.params.id
    if(id!==undefined){
        const sql = 'DELETE FROM todo_lists WHERE todo_id = $1'
        db.query(sql,[id],(err,results) => {
            if(err){
                throw err
            }
            return res.status(200).json({data:results.rowCount})
        })
    }
}

exports.updatedescription = (req,res) => {
    let description = req.body.description
    let id = req.body.id
    const sql = 'UPDATE todo_lists SET todo_describ VALUES $1 WHERE todo_id = $2'
    db.query(sql,[description,id],(err,results) => {
        if(err){
            throw err
        }
        return res.status(200).json({data:results.rowCount})
    })
}

exports.updatestatus = (req,res) => {
    let status = 'Done'
    let id = req.body.id
    const sql = 'UPDATE todo_lists SET todo_status = $1 WHERE todo_id = $2'
    db.query(sql,[status,id],(err,results) => {
        if(err){
            throw err
        }
        return res.status(200).json({data:results.rowCount})
        
    })
}

exports.updateduedate = (req,res) => {
    let duedate = req.body.due_date
    let id = req.body.id
    const sql = 'UPDATE todo_lists SET todo_end = $1 WHERE todo_id = $2'
    db.query(sql,[duedate,id],(err,results) => {
        if(err){
            throw err
        }
        return res.status(200).json({data:results.rowCount})
    })
}