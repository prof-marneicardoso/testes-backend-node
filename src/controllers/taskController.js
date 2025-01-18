//  Importa as funcionalidades do Model
import taskModel from '../models/taskModel.js';

// Busca todas as tarefas
const getAllTasks = (request, response) => {
    const tasks = taskModel.getTasks();
    response.status(200).json(tasks);
};

// Cria uma nova tarefa
const createTask = (request, response) => {
    const { title } = request.body;

    // Verifica se o title foi informado
    if (!title) {
        return response.status(400).json(
            {
                message: "Título é obrigatório"
            }
        );
    }

    // Cria a Tarefa
    const newTask = taskModel.createTask(title);
    response.status(201).json(newTask);
};

export default { getAllTasks, createTask };
