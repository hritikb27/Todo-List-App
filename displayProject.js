import removeTodo from "./removeToDo.js";

function displayTitles(todoProjects) {
    const projectsDisplayed = document.querySelector('.projects-ul');
    const array1 = todoProjects;
    const domDisplay = document.querySelector('#dom-display');
    const projectsUl = document.querySelector('#all-projects');
    const newUL = document.createElement('ul');
    newUL.setAttribute('class', 'projects-ul');

    array1.forEach(project => {
        if (projectsDisplayed === null) {
            const newLI = document.createElement('li');
            newLI.setAttribute('class', 'onclick-projects')
            newLI.textContent = project.Title;
            newUL.appendChild(newLI);
            projectsUl.appendChild(newUL);
        }

    })
}

function displayTodos(todo, project) {
    const projectClass = project.replace(/\W+/g, '-').toLowerCase();
    const domDisplay = document.querySelector('#dom-display');

    todo.forEach(todoProject => {
        const projectDiv = document.createElement('div');

        const p1 = document.createElement('p');
        p1.textContent = todoProject.name;
        projectDiv.appendChild(p1)
        const p2 = document.createElement('p');
        p2.textContent = todoProject.description;
        projectDiv.appendChild(p2);
        const p3 = document.createElement('p');
        p3.textContent = todoProject.dueDate;
        projectDiv.appendChild(p3);
        const p4 = document.createElement('p');
        p4.textContent = todoProject.isComplete;
        projectDiv.appendChild(p4);
        const p5 = document.createElement('p');
        p5.textContent = todoProject.priority;
        projectDiv.appendChild(p5);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('class', 'remove-todo');
        projectDiv.appendChild(removeBtn);

        projectDiv.setAttribute('class', 'hide-todo');
        domDisplay.appendChild(projectDiv);
        projectDiv.classList.add(projectClass, 'todo-class');

        removeBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            removeTodo(e.target.parentElement.firstChild.textContent);
            // console.log(e.target.parentElement.firstChild.textContent)
        })
    })
}



export { displayTitles, displayTodos };