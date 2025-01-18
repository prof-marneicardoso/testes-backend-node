import request from 'supertest';
import app from '../src/app.js';

describe("Task API", () => {
    test("GET /tasks deve retornar todas as tarefas", async () => {
        const response = await request(app).get('/tasks');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            [
                {
                    id: 1,
                    title: "Comprar mercadorias"
                }
            ]
        );
    });

    test("POST /tasks deve criar uma nova tarefa", async () => {
        const response = await request(app)
            .post('/tasks')
            .send({ title: "Aprender Testes" });
        
        expect(response.status).toBe(201);
        expect(response.body).toEqual(
            {
                id: 2,
                title: "Aprender Testes"
            }
        );
    });

    test("POST /tasks retorna 400 se não informar o título", async () => {
        const response = await request(app)
            .post('/tasks')
            .send({});

        expect(response.status).toBe(400);
        expect(response.body).toEqual(
            {
                message: "Título é obrigatório"
            }
        );
    });
});
