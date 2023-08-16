import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import TarefaController from './controller/TarefaController.js'

const server = express();
server.use(cors());
server.use(express.json())

server.use(TarefaController)


server.listen(process.env.PORT, () => console.log(`
        A API esta online na porta ${process.env.PORT}
        ********************************************
        Acesse em https://localhost:${process.env.PORT}/
`));


