import { Router } from "express";
import { getUserTodos, getTodosTasks} from "../controllers/todos.controller.js";

const router = Router();


router.get('/users/:id/todos', getUserTodos);
router.get('todos/:id',getTodosTasks);


export default router;