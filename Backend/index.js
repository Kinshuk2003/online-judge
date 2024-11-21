const express = require('express');
const app = express();
const {DBConnection} = require('./database/db');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
DBConnection();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("welcome");
    
});

app.post("/register", async (req, res) => {
    try {
        //get all the data from the request Body
        const { firstName, lastName, email, password} = req.body;
        //check that all the data should exist
        if(!(firstName && lastName && email && password)) {
            return res.status(400).send("please enter all the required fields!")
        }
        //check if user already exists
         const existingUser = await User.findOne({email});
         if (existingUser) {
            return res.status(400).send("User already Exists!");
         }
        //encrypt the password
        const hashPassword = bcrypt.hashSync(password, 10);
        console.log(hashPassword);        
        //save the user to the database
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
        });
        //generate a token for user and send it
        const token = jwt.sign({id:user._id, email}, process.env.SECRET_KEY, {
            expiresIn: "30m"
        });
        user.token = token;
        user.password = undefined;
        res.status(201).json({
            message: "User Created Successfully!",
            user
        });
    }catch (error) 
    {
        console.error(error);
    }
});

app.listen(8000, ()=> {
    console.log("server is listening on 8000");
});