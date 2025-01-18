// Lista de tarefas
let tasks = [
    {
        id: 1,
        title: "Comprar mercadorias",
    }
];

// Busca todas as tarefas
const getTasks = () => tasks;

// Cria uma nova tarefa
const createTask = (title) => {
    const newTask = {
        id: tasks.length + 1,
        title
    };
};

// Exporta as functions
export default { getTasks, createTask };
