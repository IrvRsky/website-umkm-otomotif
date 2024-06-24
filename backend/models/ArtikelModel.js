import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Artikel = db.define('artikel',{
    artikel_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    judul:{
        type: DataTypes.TEXT
    },
    deskripsi_artikel:{
        type: DataTypes.TEXT
    },
    tgl:{
        type: DataTypes.DATE
    },
    penulis:{
        type: DataTypes.STRING
    },
    gambar:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName : true
});

export default Artikel;