import 'dotenv/config';
import cors from 'cors';
import express, { request, response } from 'express';
import { listarMusica } from './BD/bd.js';

const server = express();

server.use(cors());

server.listen(process.env.PORT, () => console.log(`
        A API esta online na porta ${process.env.PORT}
        ********************************************
        Acesse em https://localhost:${process.env.PORT}/
`));


server.get('/', async (request, response) =>{
        let data1 = await listarMusica();

        response.json(data1);
});