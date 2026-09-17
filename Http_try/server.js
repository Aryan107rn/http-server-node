const http = require("http");

const server =http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="GET"){
        res.end("Home Page");
    }
    else if(req.url==="/users" && req.method==="GET"){
        res.send("User page");
    }
    else if(req.url==="/about" && req.method==="GET"){
        res.send("About Page");
    }
    else{
        res.statusCode=404;
        res.end("Not found");
    }
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})