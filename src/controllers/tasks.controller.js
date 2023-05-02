import fs from 'fs';
import { v4 as uuid } from 'uuid';

//data
const json_tasks = fs.readFileSync('./src/data/tasks.json','utf-8');
let tasks = JSON.parse(json_tasks);


export const createTask = (req, res) =>{ 
   res.send('holaaaa')
   console.log(req.body)

   const { title, completed} = req.body;
   
   if (!title || !completed) {
     res.status(400).send("todos lo campos son obligatorios");
     return;
   }

   let newTask = {
       id:uuid(),
       title,
       completed,
       todoId: req.params.id,
       userId: req.params.id
   };

   tasks.push(newTask);

   const json_tasks = JSON.stringify(tasks);
   fs.writeFileSync('./src/data/tasks.json', json_tasks, 'utf-8');
   
   res.send(newTask);
 
}
