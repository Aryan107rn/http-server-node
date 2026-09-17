const http = require("http");

const server =http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="GET"){
        res.end("Home Page");
    }
    else if(req.url==="/users" && req.method==="GET"){
        res.send("User page");
    }
})