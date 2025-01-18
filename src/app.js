import express from 'express';
import taskController from './controllers/taskController.js';

const app = express();
app.use(express.json());

// Chamada das functions (endpoints)
app.get('/tasks', taskController.getAllTasks);
app.post('/tasks', taskController.createTask);

export default app;
