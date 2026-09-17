const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("Hello from Node.js\n");
    res.end("On port 4000");
})

server.listen(4000,()=>{
    console.log("Server running on port 4000");
})