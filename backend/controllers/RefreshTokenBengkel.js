import Bengkel from "../models/BengkelModel.js";
import jwt from "jsonwebtoken";

export const refreshTokenBengkel = async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.sendStatus(401);
      
      const bengkel = await Bengkel.findOne({
        where: {
          refresh_token: refreshToken
        },
        include: [Admin]
      });
      
      if (!bengkel) return res.sendStatus(403);
  
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          console.error("JWT verification error:", err);
          return res.sendStatus(403);
        }
        
        const { bengkel_id, id, nama_bengkel, no_tlp_bengkel, alamat, deskripsi, latitude, longtitude, gambar_bengkel } = bengkel;
        
        const accessToken = jwt.sign({
          bengkelId: bengkel_id,
          adminId: id,
          namaBengkel: nama_bengkel,
          noTlp: no_tlp_bengkel,
          alamat: alamat,
          deskripsi: deskripsi,
          latitude: latitude,
          longtitude: longtitude,
          gambarBengkel: gambar_bengkel
        }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '15s'
        });
  
        res.json({ accessToken });
      });
    } catch (error) {
      console.error("Refresh token error:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  