import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {

//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if(token == null) return res.sendStatus(401);
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if(err) return res.sendStatus(403);
//         req.email = decoded.email;
//         next();
//     })
// }

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        console.log(decoded); // Log the decoded token
        req.email = decoded.email;
        req.email_bengkel = decoded.email_bengkel;
        req.userId = decoded.adminId || decoded.admId; // Menggunakan id dari token yang sudah terdecode
        req.userId = decoded.admId; // Menggunakan id dari token yang sudah terdecode
        req.userId = decoded.userId;
        req.userId = decoded.admId || decoded.id; // Ensure this matches the field in your token
        next();
    });
}
