import { Router } from "express";
import { getUserTodos, getTodosTasks } from "../controllers/todos.controller.js";

const router = Router();

router.get("/pendientes/:id",getTodosTasks);
router.get('/users/:id/todos', getUserTodos);



export default router;