import { Router } from "express";
import { createTask } from "../controllers/tasks.controller.js";

const router = Router();


router.post('/:id/task', createTask);


export default router;
