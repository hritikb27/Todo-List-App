function displayProjects(todoProjects) {
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
        const projectClass = project.Title.replace(/\W+/g, '-').toLowerCase();

        if(!domDisplay.innerHTML.includes('div')){
            for (let i = 0; i < project.Todo.length; i++) {
                const projectDiv = document.createElement('div');
    
                const p1 = document.createElement('p');
                p1.textContent = project.Todo[i].name;
                projectDiv.appendChild(p1)
                const p2 = document.createElement('p');
                p2.textContent = project.Todo[i].description;
                projectDiv.appendChild(p2);
                const p3 = document.createElement('p');
                p3.textContent = project.Todo[i].dueDate;
                projectDiv.appendChild(p3);
                const p4 = document.createElement('p');
                p4.textContent = project.Todo[i].isComplete;
                projectDiv.appendChild(p4);
                const p5 = document.createElement('p');
                p5.textContent = project.Todo[i].priority;
                projectDiv.appendChild(p5);
    
                projectDiv.setAttribute('class', 'hide-todo');
                domDisplay.appendChild(projectDiv);
                projectDiv.classList.add(projectClass);
            }
        }

    })
}

export default displayProjects;