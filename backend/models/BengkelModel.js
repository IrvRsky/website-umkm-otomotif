import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Admin from "./AdminModel.js";

const { DataTypes } = Sequelize;

const Bengkel = db.define(
  "bengkel",
  {
    bengkel_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
      type: DataTypes.INTEGER,
      // allowNull: false
      references: {
        model: Admin,
        key: "id",
      },
    },
    nama_bengkel: {
      type: DataTypes.STRING,
    },
    no_tlp_bengkel: {
      type: DataTypes.BIGINT,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    deskripsi: {
      type: DataTypes.TEXT,
    },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longtitude: {
      type: DataTypes.FLOAT,
    },
    gambar_bengkel: {
      type: DataTypes.TEXT,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    }
  },
  {
    freezeTableName: true,
  }
);

Admin.hasMany(Bengkel, { foreignKey: "id" });
Bengkel.belongsTo(Admin, { foreignKey: "id" });

export default Bengkel;
