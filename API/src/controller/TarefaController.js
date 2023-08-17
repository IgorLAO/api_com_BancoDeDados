import { Router } from "express";
import  {  listarTarefas, InsertTask, DeleteTask } from "../repository/tarefaRepository.js";

let endpoint = Router();

endpoint.get('/tasks', async (req, resp) =>{
    let dados = await listarTarefas();
    resp.send(dados);
})


endpoint.post('/task', async(req, resp) =>{
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

endpoint.delete('/tasks/:id', async (req, resp) =>{
    const { id } = req.params;

    const response = await DeleteTask(id)

    resp.status(204).send()

})



export default endpoint;