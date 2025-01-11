import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import apiRouter from './routes/apiRoute.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';


const app = express();

//middlewares
app.use(morgan('combined'));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.use("/", apiRouter);

app.get("/ping", (req, res) => {
    res.send("ping pong");
    
});


app.post("/run" , async (req, res) => {
    const {language = "cpp", code } = req.body;
    //const input = req.body.input;

    // const script = {
    //     python: "python",
    //     javascript: "node",
    //     java: "java",
    //     cpp: "g++",
    // }
    if (!code) {
        return res.status(400).json({
            message: "Error",
            error: "Please provide code",
        });
    }
    try {
        const filePath = await generateFile(code, language);
        const {stdout, stderr} = await executeCpp(filePath);
        return res.status(200).json({
            message: "File Created Successfully",
            filePath: filePath,
            output: stdout,
            error: stderr,
        });

    }catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }

    // const command = `${script[lang]} ${code}`;
    // const { exec } = require("child_process");
    // exec(command, (error, stdout, stderr) => {
    //     if (error) {
    //         return res.status(400).json({
    //             message: "Error",
    //             error: stderr,
    //         });
    //     }
    //     return res.status(200).json({
    //         message: "Suc",
    //         output: stdout,
    //     });
    // });
}
);



app.listen(PORT, ()=> {
    console.log(`server is listening on ${PORT}`);
    connectDB();
});