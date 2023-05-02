import { Router } from "express";
import { getUsers, getUserId, createUser } from "../controllers/users.controller.js";

const router = Router();


router.get('/', getUsers);

router.get('/:id', getUserId);

router.post('/',createUser);


export default router;

