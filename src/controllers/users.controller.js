import fs from 'fs';
import { v4 as uuid } from 'uuid';
//data
const json_books = fs.readFileSync('./src/data/books.json','utf-8');
let books = JSON.parse(json_books);

//obtens usuario
export const getUsers = (req, res) => res.json(books);

//
export const getUserId = (req, res) => {
    const usersId = books.find( x => x.id == req.params.id)
    console.log(usersId);
    return res.send(usersId);
};

export const createUser = (req, res) =>{
    console.log(req.body)
    const { firstName, lastName, email } = req.body;
    
    if (!firstName || !lastName || !email) {
      res.status(400).send("todos lo campos son obligatorios");
      return;
    }

    let newBook = {
        id:uuid(),
        firstName,
        lastName,
        email
    };

    books.push(newBook);

    const json_books = JSON.stringify(books);
    fs.writeFileSync('./src/data/books.json', json_books, 'utf-8');
    
    res.send(newBook);
  
}
