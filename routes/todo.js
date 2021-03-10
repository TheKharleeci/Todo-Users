const { Router } = require("express");
const { addTodo } = require("../controllers");
const { validateTitle } = require("../middlewares");

const todoRouter = Router();

userRouter.post("/addTodo", validateTitle, addTodo );

module.exports = todoRouter;