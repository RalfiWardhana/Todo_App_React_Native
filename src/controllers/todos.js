const {todo} = require("../../models");

exports.addTodo =async(req,res) => {
    try{
        await todo.create(req.body)
        res.send({
            status: "succes",
            message :"Success to add todo",
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            status: "error",
            message: "Server Error"
        })
    }
}
exports.getTodos =async(req,res) => {
    try{
        const data =  await todo.findAll()
        res.send({
            status: "succes",
            message :"Success to get todos",
            data: data
            
        })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            status: "error",
            message: "Server Error"
        })
    }
}
exports.getTodo =async(req,res) => {
    const id = req.params.id;
    try{
        const data =  await todo.findOne({
            where: {id}
        })
            
        res.status(200).send({
            status: "succes",
            message :"Success to get todo",
            data: data,
        })
       
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            status: "error",
            message: "Server Error"
        })
    }
}
exports.updateTodo =async(req,res) => {
    const id = req.params.id;
    try{
        await todo.update(req.body,{
                where: {id}
        })
        const data = await todo.findOne({
                where:{id}
        })
        res.send({
            status: "succes",
            message :"Success to update todo",
            data: data
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            status: "error",
            message: "Server Error"
        })
    }
}
exports.deleteTodo =async(req,res) => {
    const id = req.params.id;
    try{
        await todo.destroy({
            where: {id}
        })
            
        res.send({
            status: "succes",
            message :"Success to delete todo",
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            status: "error",
            message: "Server Error",
            id:id
        })
    }
}