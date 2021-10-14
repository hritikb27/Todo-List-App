import createProject from "./createProject.js";
import removeTodo from "./removeToDo.js";
import { displayTitles, displayTodos } from "./displayProject.js";
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

function getTodoList() {
    const getTodos = JSON.parse(localStorage.getItem('Todo'))
    return getTodos;
}

function displayProject() {
    const renderDisplay = displayTitles(getTodoList('Todo'));

}

function removeTodos() {
    removeTodo('CreateTodo', 0, 'Water Plants')
}

displayAllProjects.addEventListener('click', () => {
    displayProject();

    const onclickProjects = document.querySelectorAll('.onclick-projects');

    onclickProjects.forEach(project=>{
        project.addEventListener('click', (e) => {
            const domDisplay = document.querySelector('#dom-display');
            domDisplay.innerHTML = '';
            const getData = getTodoList();
            getData.forEach(Element=>{
                if(project.textContent===Element.Title){
                    displayTodos(Element.Todo, Element.Title);
                }
            })
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
    })
});

addProjectButton();

if(getTodoList()===null){
    createTod();
}


export { getTodoList };