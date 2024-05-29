import express from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors({
    orignin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}));

app.listen(5000, ()=> {
    console.log("Server unning.....");
})