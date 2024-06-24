import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Admin from "./models/AdminModel.js";
import Bengkel from "./models/BengkelModel.js";

dotenv.config();

try {
    await db.authenticate();
    console.log('Database Connected..');
} catch (error) {
    console.error(error);
}

const app = express();

// CORS configuration
const allowedOrigins = ['https://destined-separately-fox.ngrok-free.app'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.path}`);
    next();
});


const port = 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
