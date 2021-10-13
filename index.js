import createProject from "./createProject.js";
import removeTodo from "./removeToDo.js";
import displayProjects from "./displayProject.js";
import { createTodoList, storeTodos } from "./createTodos.js";
import addProjectButton from "./domModule.js";

const displayAllProjects = document.querySelector('#all-projects');
const mainDisplay = document.querySelector('#main-display');

function createTod() {
    const projArray = [];
    const project1 = createProject('Project 1');
    const todo1 = createTodoList('Todo 1', 'This is Todo 1!', '28/10/2021', false, '1');

    const firstProject= storeTodos(project1, todo1);
    projArray.push(firstProject)
    localStorage.setItem('Todo', JSON.stringify(projArray))
}


// function storeToDO(oldProjectName){
//     const Todos= getTodoList(oldProjectName);
//     return
// }

function getTodoList() {
    const getTodos = JSON.parse(localStorage.getItem('Todo'))
    return getTodos;
}

function displayProject() {
    const renderDisplay = displayProjects(getTodoList('Todo'));

}

function removeTodos() {
    removeTodo('CreateTodo', 0, 'Water Plants')
}

displayAllProjects.addEventListener('click', () => {
    displayProject();

    const onclickProjects = document.querySelector('.onclick-projects');

    onclickProjects.addEventListener('click', (e) => {
        console.log('click')
        e.stopPropagation();
        if (document.getElementById('project-title')) {
            const projectTitle = document.getElementById('project-title');
            projectTitle.remove();
        }
        const projectTitle = document.createElement('h2');
        projectTitle.setAttribute('id', 'project-title');
        projectTitle.textContent = e.target.textContent;
        mainDisplay.insertBefore(projectTitle, mainDisplay.firstChild)
        const projectName = e.target.textContent.replace(/\W+/g, '-').toLowerCase();
        const getProjectDiv = document.getElementsByClassName(projectName);
        for (let i = 0; i < getProjectDiv.length; i++) {
            getProjectDiv[i].classList.add('display-todo')
        }
    })
});


const projectsUL = document.querySelector('.projects-ul');

addProjectButton();

if(getTodoList==null){
    createTod();
}


export { getTodoList };