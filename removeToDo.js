function removeTodo(name, num, todoName){
    const getData = JSON.parse(localStorage.getItem(name));

    getData.splice(getData.indexOf(getData[num].todoName), 1)

    localStorage.setItem(name,JSON.stringify(getData))
}

export default removeTodo;