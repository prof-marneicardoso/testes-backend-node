import taskModel from '../src/models/taskModel.js';

// Descreve o teste
describe('Task Model', () => {
    test("getTasks deve retornar todas as tarefas", () => {
        const tasks = taskModel.getTasks();
        expect(tasks).toEqual(
            [
                {
                    id: 1,
                    title: "Comprar mercadorias"
                }
            ]
        );
    });

    test("createTask deve adicionar uma nova tarefa", () => {
        const newTask = taskModel.createTask("Aprender Node.js");
        expect(newTask).toEqual(
            {
                id: 2,
                title: "Aprender Node.js"
            }
        );

        expect(taskModel.getTasks().toHaveLength(2));
    });
});
