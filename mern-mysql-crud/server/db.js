import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: process.env.IP_DB,
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'TASK_DB'
})


