import Admin from "../models/AdminModel.js";
import jwt from "jsonwebtoken";

// export const refreshToken = async(req, res) => {
//     try {
//         const refreshToken = req.cookies.refreshToken;
//         if(!refreshToken) return req.sendStatus(401);
//         const adm = await Admin.findAll({
//             where:{
//                 refresh_token: refreshToken
//             }
//         });
//         if(!adm[0]) return res.sendStatus(403);
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//             if(err) return res.sendStatus(403);
//             const adminId = adm[0].id;
//             const username = adm[0].username;
//             const email = adm[0].email;
//             const accessToken = jwt.sign({adminId, username, email}, process.env.ACCESS_TOKEN_SECRET, {
//                 expiresIn: '15s'
//             })
//             res.json({accessToken});
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        
        const adm = await Admin.findAll({
            where: { refresh_token: refreshToken }
        });
        
        if (!adm[0]) return res.sendStatus(403);
        
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            
            const adminId = adm[0].id;
            const email_bengkel = adm[0].email_bengkel;
            const accessToken = jwt.sign({ adminId, email_bengkel }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d'
            });
            
            res.json({ accessToken });
        });
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

