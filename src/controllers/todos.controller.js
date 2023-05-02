import fs from 'fs';

//data todos
const json_todos = fs.readFileSync('./src/data/todos.json','utf-8');
let todos = JSON.parse(json_todos);

//data tasks
//data
const json_tasks = fs.readFileSync('./src/data/tasks.json','utf-8');
let tasks = JSON.parse(json_tasks);

export const getUserTodos = (req, res) => {
    const todosUserId = todos.find( x => x.userId == req.params.id)
    console.log(todosUserId);
    return res.send(todosUserId);
};

export const getTodosTasks = (req, res) => {
    
    const todosId = todos.find( x => x.id == req.params.id);

    //traemos la tareas del todo
    const pendientes = tasks.filter(x => x.userId == req.params.id);

    todosId.todo = pendientes;

    console.log(todosId);
    return res.send(todosId);
};

