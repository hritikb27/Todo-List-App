import createTodo from "./createTodo.js";
import removeTodo from "./removeToDo.js";


const newTodo = new createTodo('Water Plants', 'First time making todo', '28/09', false, 'important');

function storeToDO(oldProjectName, newProjectName){
    const Todos= getTodoList(oldProjectName);
    Todos.push(newTodo)
    localStorage.setItem(newProjectName, JSON.stringify(Todos));
}

function getTodoList(oldProjectName){
    const getTodos= JSON.parse(localStorage.getItem(oldProjectName))
    if(getTodos==null){
        return [];
    }else{
    return getTodos;
    }
}

function removeTodos(){
    removeTodo('CreateTodo', 0, 'Water Plants')
}