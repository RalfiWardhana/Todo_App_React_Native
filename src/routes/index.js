const{Router} = require("express");
const router = Router();
const{addTodo,getTodos,getTodo,updateTodo,deleteTodo}=require("../controllers/todos")

router.post("/todo",addTodo)
router.get("/todos",getTodos)
router.get("/todo/:id",getTodo)
router.patch("/todo/:id",updateTodo)
router.delete("/todo/:id",deleteTodo)

module.exports=router;