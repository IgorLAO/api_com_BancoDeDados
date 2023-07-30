import conexao from "./conection.js";

export async function listarMusica(){
    let comando = `select *
                    from TB_MUSICAS`
    
    let resp = await conexao.query(comando, [])
    let data = resp[0]

    return data;
}