const db = require('../config/database')

exports.show = (req,res) => {
    let user_id = req.params.id
    const sql = 'SELECT * FROM projects WHERE user_id = $1'
    db.query(sql,[user_id],(err,results) => {
        if(err){
            throw err
        }
        return res.status(200).json({data:results.rowCount})
    })
}

exports.add = (req,res) => {
    let name = req.body.name
    let description = req.body.description
    let user_id = req.body.user_id
    const sql = 'INSERT INTO projects (project_name,project_description,project_createdat,user_id) VALUES ($1,$2,now(),$3)'
    db.query(sql,[name,description,user_id],(err,results) => {
        if(err){
            throw err
        }
        return res.status(200).json({data:results.rowCount})
    })
}

exports.delete = (req,res) => {
    let id = req.params.id
    console.log(id)
    const sql = 'DELETE FROM projects WHERE project_id = $1'
    db.query(sql,[id],(err,results) => {
        if(err){
            throw err
        }
        return res.status(200).json({data:results.rowCount})
    })
}