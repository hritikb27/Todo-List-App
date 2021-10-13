function displayTodo(todoProjects){
    const array1 = todoProjects;
    const domDisplay = document.querySelector('#main-display');
    array1.forEach(project => {
        for(let i=1; i<project.length; i++){
            const p = document.createElement('p');
            p.textContent = project[i];
            domDisplay.appendChild(p);
        }
    });
};

export default displayTodo;