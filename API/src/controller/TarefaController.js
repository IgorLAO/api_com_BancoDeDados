import { Router } from "express";
import  {  listarTarefas, InsertTask, DeleteTask, ChangeTask } from "../repository/tarefaRepository.js";

let server = Router();

server.get('/tasks', async (req, resp) =>{
    let dados = await listarTarefas();
    resp.send(dados);
})


server.post('/task', async(req, resp) =>{
        try {
            const AddTask = req.body; 

            const data = await InsertTask(AddTask);

            resp.send(data)
        } catch (err) {
            resp.send(400).send({
                erro: err.message
            })
        }
})

server.delete('/task/:id', async (req, resp) =>{
    const { id } = req.params;

    const response = await DeleteTask(id)

    resp.status(204).send('changed task')

})

 server.put('/task/:id', async (req, resp) =>{
    try {
        const { id } = req.params;
        const task  = req.body;
        const resposta = await ChangeTask(task, id)
        if(resposta != 1)
            throw new Error('O filme não pode ser alterado')
        else
            resp.status(204).send()

    } catch (err) {
        resp.send(400).send({
            erro: err.message
        })
    }
  
 });




export default server;