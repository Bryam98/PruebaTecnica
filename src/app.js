import express from "express";
import morgan from "morgan";
import usersRoutes from "./routes/users.routes.js"
import tasksRoutes from "./routes/tasks.routes.js"
import todosRoutes from "./routes/todos.routes.js"

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes 
app.use('/',todosRoutes)
app.use('/users',usersRoutes)
app.use('/todos',tasksRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});

export default app;








