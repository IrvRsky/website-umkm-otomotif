import { Sequelize } from "sequelize";

// HUBUNGKAN KE DATABASE
const db = new Sequelize('more_application','root','2003',{
    host : 'localhost',
    dialect : 'mysql'
});

export default db;