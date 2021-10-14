import createProject from "./createProject.js";
import createTodo from "./createProject.js";
import {createTodoList, storeTodos} from "./createTodos.js";
import { getTodoList } from "./index.js";

function addProjectButton(){
    const addProjectDisplay = document.querySelector('.add-proj');
    const addProjectBtn = document.querySelector('#add-proj-btn');
    const projectName = document.querySelector('#proj-name');
    const projectAddBtn = document.querySelector('#proj-add');

    const addTodoDisplay = document.querySelector('.add-todo');
    const addTodoBtn = document.querySelector('#add-todo-btn');
    const todoAddBtn = document.querySelector('#todo-add');

    const getTodoName = document.querySelector('#todo-name');
    const getTodoDesc = document.querySelector('#todo-desc');
    const getTodoDate = document.querySelector('#todo-date');
    const getTodoPriority = document.querySelector('#todo-priority');

    addProjectBtn.addEventListener('click', ()=>{
        addProjectDisplay.style.display = 'block';
    });

    projectAddBtn.addEventListener('click', ()=>{
        const newProject = new createProject(projectName.value);
        const todoList = getTodoList();
        todoList.push(newProject);
        localStorage.setItem('Todo',JSON.stringify(todoList));
    })

    addTodoBtn.addEventListener('click', ()=>{
        addTodoDisplay.style.display= 'block';
    })

    todoAddBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const newTodo = new createTodoList(getTodoName.value, getTodoDesc.value, getTodoDate.value, false, getTodoPriority.value);
        const todoList = getTodoList();
        todoList.forEach(project=>{
            const projectTitle = document.getElementById('project-title');
            if(projectTitle.textContent===project.Title){
                project.Todo.push(newTodo);
                console.log(todoList)
                localStorage.setItem('Todo',JSON.stringify(todoList))
            }
        })
    })
}

export default addProjectButton;