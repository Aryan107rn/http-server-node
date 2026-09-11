const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();
 
app.get('/',(req,res)=>{
    return res.send("From Home Page");
});

app.get('about',(req,res)=>{
    return res.send("From about Page");
});


function myHandler(req , res){

}
