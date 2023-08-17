import connectionDB from "./conection.js";

export async function listarTarefas(){
    let sql = `select *
                    from TB_TASKS`
    
    let resp = await connectionDB.query(sql);
    let data = resp[0];
    return data;
}

export async function InsertTask(task) {
    let comand = `INSERT INTO TB_TASKS (DS_TASK, NR_ORDER, BT_FINISHED, DT_CADASTRO)
                                VALUES (?, ?, ?, ?)`;

    const [resp] = await connectionDB.query( comand, [task.DS_TASK, task.NR_ORDER, task.BT_FINISHED, task.DT_CADASTRO ]);
    return task;
}

export async function DeleteTask(id){
    let sql = `DELETE FROM TB_TASKS
                        WHERE ID_TASK = ?`

    const [resp]  = await connectionDB.query( sql, [id])  
    return id
}