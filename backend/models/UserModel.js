import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('user',{
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nama_user:{
        type: DataTypes.STRING
    },
    no_tlp:{
        type: DataTypes.BIGINT
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName : true
});

export default User;