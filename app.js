const http = require('node:http');

const fs = require('node:fs');

const path = require('node:path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  if (req.method === 'GET') {

  } else if (req.method === 'POST') {

  } else {
    
  }
});

server.listen(PORT,(err)=>{
  if (err) {
    console.error(err);
  } else {
    console.log("서버가동중");
    console.log(`http://localhost:${PORT}`);
  }
})