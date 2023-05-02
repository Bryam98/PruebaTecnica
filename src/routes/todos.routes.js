import { Router } from "express";
import { getUserTodos} from "../controllers/todos.controller.js";

const router = Router();


router.get('/users/:id/todos', getUserTodos);



export default router;