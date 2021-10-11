function createTodo(name, description, dueDate, isComplete, priority){
    const todo = {
        name,
        description,
        dueDate,
        isComplete,
        priority
    }
    
    return todo;
}

export default createTodo;