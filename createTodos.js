function storeTodos(takeProject, takeTodos){
    if(!takeProject.Todo){
        takeProject.Todo = [];
        takeProject.Todo.push(takeTodos);
    }else{
        const newTodo = takeProject.Todo;
        console.log(newTodo)
        newTodo.push(takeTodos);
        takeProject.Todo = newTodo;
    }

    return takeProject;
}

function createTodos(name, description, dueDate, isComplete, priority){
    this.name = name,
    this.description = description,
    this.dueDate = dueDate,
    this.isComplete = isComplete,
    this.priority = priority
}

export {createTodos, storeTodos};