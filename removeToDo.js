import { getTodoList } from './index.js'

function removeTodo(name){
    const projectTitle = document.getElementById('project-title');
    const getStoreData = getTodoList();

    getStoreData.forEach(project => {
        if(project.Title===projectTitle.textContent){
            project.Todo.forEach(todo=>{
                if(todo.name===name){
                    const spliceIndex = project.Todo.indexOf(todo);
                    project.Todo.splice(spliceIndex, 1);
                    localStorage.setItem('Todo', JSON.stringify(getStoreData));
                    return;
                }
            })
        }
    });
    
}

export default removeTodo;