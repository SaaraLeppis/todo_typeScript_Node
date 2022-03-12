"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updatesTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
//const createTodo=(req: Request, res:Response, next:NextFunction)=>{
// after importing 'RequestHandler'
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created todo', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updatesTodos = (req, res, next) => {
    const index = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === index);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updateText);
    res.json({ message: 'Updated', updatesTodo: TODOS[todoIndex] });
};
exports.updatesTodos = updatesTodos;
const deleteTodo = (req, res, next) => {
    const index = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === index);
    if (todoIndex < 0) {
        throw new Error("Could not find todo! Mistake in index.");
    }
    TODOS.splice(todoIndex, 1);
    //TODOS = TODOS.filter((todo) => todo.id !== index)
    res.json({ message: "Deleted todo", RemainedTodos: TODOS });
};
exports.deleteTodo = deleteTodo;
