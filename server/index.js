import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import Connection from './database/db.js'; //extension is must
import Router from './routes/route.js';

dotenv.config();

const app=express();
const port=8000;

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

app.listen(port,()=>{
    console.log(`Server is running successfully on port ${port}.`)
});

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);


