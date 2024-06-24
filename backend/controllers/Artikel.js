import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Artikel from "../models/ArtikelModel.js";

export const getArtikel = async (req, res) => {
    try {
        const artikel = await Artikel.findAll({
            attributes: ["artikel_id", "judul", "deskripsi_artikel", "tgl", "penulis", "gambar"],
        });
        res.json(artikel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};