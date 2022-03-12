//import {Request, Response, NextFunction} from 'express'; 
// above can be replaced with 
import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];
//const createTodo=(req: Request, res:Response, next:NextFunction)=>{
// after importing 'RequestHandler'
export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);

    res.status(201).json({ message: 'Created todo', createTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({ todos: TODOS });
}

export const updatesTodos: RequestHandler = (req, res, next) => {
    const index = req.params.id;
    const updateText = (req.body as { text: string }).text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === index)

    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    }
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updateText);
    res.json({ message: 'Updated', updatesTodo: TODOS[todoIndex] })

};
export const deleteTodo: RequestHandler = (req, res, next) => {
    const index = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === index);
    if (todoIndex < 0) {
        throw new Error("Could not find todo! Mistake in index.");
    }

    TODOS.splice(todoIndex, 1);

    //TODOS = TODOS.filter((todo) => todo.id !== index)

    res.json({ message: "Deleted todo", RemainedTodos: TODOS })

}
