import fs from 'fs';

//data
const json_todos = fs.readFileSync('./src/data/todos.json','utf-8');
let todos = JSON.parse(json_todos);

export const getUserTodos = (req, res) => {
    const todosUserId = todos.find( x => x.userId == req.params.id)
    console.log(todosUserId);
    return res.send(todosUserId);
};
