import { Sequelize } from "sequelize";

// HUBUNGKAN KE DATABASE
const db = new Sequelize('auth_db_bengkel','root','',{
    host : 'localhost',
    dialect : 'mysql'
});

export default db;