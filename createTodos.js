function storeTodos(takeProject, takeTodos){
    takeProject.Todo.push(takeTodos);

    return takeProject;
}

function createTodoList(name, description, dueDate, isComplete, priority){
    const todoObject = { name,
    description,
    dueDate,
    isComplete,
    priority
    }

    return todoObject;
}

export {createTodoList, storeTodos};