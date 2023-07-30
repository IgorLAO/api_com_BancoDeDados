import mysql2 from 'mysql2/promise'

let config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

let conexao = await mysql2.createConnection(config);

export default conexao