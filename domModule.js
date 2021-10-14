import createProject from "./createProject.js";
import createTodo from "./createProject.js";
import { createTodoList, storeTodos } from "./createTodos.js";
import { getTodoList } from "./index.js";

function addProjectButton() {
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

    const todoForm = document.querySelector('#todo-form');

    addProjectBtn.addEventListener('click', () => {
        addProjectDisplay.style.display = 'block';
    });

    projectAddBtn.addEventListener('click', () => {
        let canCreateProject = true;
        const getStoreData = getTodoList();
        getStoreData.forEach(project => {
            if (project.Title === projectName.value) {
                alert('This Project already exists, please make another one!');
                projectName.value = '';
                canCreateProject = false;
            }
        })
        if (projectName.value === '') {
            return;
        } else if (canCreateProject) {
            const newProject = new createProject(projectName.value);
            const todoList = getTodoList();
            todoList.push(newProject);
            localStorage.setItem('Todo', JSON.stringify(todoList));
        }
    })

    addTodoBtn.addEventListener('click', () => {
        addTodoDisplay.style.display = 'block';
    })

    todoAddBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let canCreateTodo = true;
        const getStoreData = getTodoList();
        getStoreData.forEach(project => {
            project.Todo.forEach(todo=>{
                if (todo.name === getTodoName.value) {
                    alert('This Todo already exists, please make another one!');
                    todoForm.reset();
                    canCreateTodo = false;
                }
            })
        })

        if(getTodoName.value===''|| getTodoDesc.value===''|| getTodoDate.value===''|| getTodoPriority.value===''){
            alert('Please fill all the details!');
            canCreateTodo=false;
        }
        
        if (canCreateTodo) {
            const newTodo = new createTodoList(getTodoName.value, getTodoDesc.value, getTodoDate.value, false, getTodoPriority.value);
            const todoList = getTodoList();
            todoList.forEach(project => {
                const projectTitle = document.getElementById('project-title');
                if(!projectTitle){
                    alert('Please select a Project to add a Todo');
                    return;
                }
                if (projectTitle.textContent === project.Title) {
                    project.Todo.push(newTodo);
                    console.log(todoList)
                    localStorage.setItem('Todo', JSON.stringify(todoList))
                }
            })
            todoForm.reset();
            addTodoDisplay.style.display = 'none';
        }
    })
}

export default addProjectButton;