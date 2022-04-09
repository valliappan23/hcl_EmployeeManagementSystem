const http = require("http");

const app = require("./backend/app")


// const server = http.createServer((req, res)=>{

//     res.end("Welcome to my 1st Nodejs");
// });


const server = http.createServer(app);

server.listen(3000, ()=>{
    // only display in command prompt
    console.log("check port number 3000");
});