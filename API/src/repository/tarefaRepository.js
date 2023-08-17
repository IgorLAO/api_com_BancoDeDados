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
};

export async function DeleteTask(id){
    let sql = `DELETE FROM TB_TASKS
                        WHERE ID_TASK = ?`

    const [resp]  = await connectionDB.query( sql, [id]);
    return id;
};

export async function ChangeTask(task, id){
    let sql =  `
                UPDATE  TB_TASKs
                SET DS_TASK	  = ?,
                BT_FINISHED   = ?,
                DT_CADASTRO	  = ?
                WHERE ID_TASK = ?;`

    const [resp] = await connectionDB.query(sql, [task.DS_TASK, task.BT_FINISHED, task.DT_CADASTRO, id]);
    return resp.affectedRows;
};

// export async function FinishedTasks(task){
//     let sql = `	SELECT 	ID_TASK 	    id,
//                     DS_TASK				tarefa,
//                     BT_FINISHED 		finalizado,
//                     DT_CADASTRO			cadastrado	
//                     FROM TB_TASKS
//                 WHERE BT_FINISHED =     TRUE`
// }