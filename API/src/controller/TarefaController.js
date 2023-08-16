import { Router } from "express";
import {  listarTarefas } from "../repository/tarefaRepository.js";

let endpoint = Router();

endpoint.get('/lista', async (req, resp) =>{
    let dados = await listarTarefas();
    resp.send(dados);
})




export default endpoint;