import express from "express";

const app=express();
const port=8000;

app.listen(port,()=>{
    console.log(`Server is running successfully on port ${port}.`)
});


