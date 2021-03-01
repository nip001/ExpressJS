// const express = require('express');
const http = require('http');
const url = require('url');
const fs = require('fs');
// const app = express();
const port = 3001;

const user = fs.readFileSync('./users.json', 'utf-8');
const margasatwa = fs.readFileSync('./margasatwa.json', 'utf-8');

const server = http.createServer((req,res)=>{
    const{pathname} = url.parse(req.url,true);
    if(pathname ==="/home" || pathname ==="/"){
        res.end("Halo mantap jiwa")
    }else if (pathname === "/users"){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(user)
    } else if (pathname === "/margasatwa"){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(margasatwa)
    }
})

server.listen(port,'127.0.0.1',()=>{
        console.log("Server sedang, mendengarkan port 3001")
})

// app.use((req,res,next)=>{
//     const mantap = req.requestTime = new Date().toISOString();
//     console.log(mantap)
//     next();
// })

// app.get('/', (req, res) =>{
//     res.send("Hello Juara Coding!")
// })

// app.get('/users',(req,res)=>{
//     res.writeHead(200,{'Content-Type': 'application/json'})
//     res.end(user)
// })

// app.get('/margasatwa',(req,res)=>{
//     res.writeHead(200,{'Content-Type': 'application/json'})
//     res.end(margasatwa)
// })

// app.listen(port,()=>{
//     console.log("Server sedang, mendengarkan port 3001")
// })