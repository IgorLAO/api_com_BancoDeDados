import conexao from "./conection.js";

export async function listarTarefas(){
    let sql = `select *
                    from TB_TASKS`
    
    let resp = await conexao.query(sql);
    let data = resp[0];
    return data;
}

