import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: '172.19.0.2',
    port: 3306,
    user: 'root',
    password: 'root123',
    database: 'TASKDB'
})


