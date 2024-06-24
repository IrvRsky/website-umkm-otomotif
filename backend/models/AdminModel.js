import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// BUAT TABEL DI DATABSE
// const Admin = db.define('user_bengkel',{
//     username:{
//         type: DataTypes.STRING
//     },
//     email:{
//         type: DataTypes.STRING
//     },
//     password:{
//         type: DataTypes.STRING
//     },
//     refresh_token:{
//         type: DataTypes.TEXT
//     }
// },{
//     freezeTableName : true
// });

const Admin = db.define('user_bengkel',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    email_bengkel:{
        type: DataTypes.STRING
    },
    password_bengkel:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName : true
});

export default Admin;