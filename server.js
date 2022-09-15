import http from 'http';
import api from './api/api.js';
const port = 3000
const server = http.createServer(api)
server.on('listening',() =>{
    console.log(`Servidor escuchando en el puert ${port}✅`);
}).on('error', (error)=>{
    if(error.code === "EADDRINUSE")
    console.log(`ha ocurrido un error ❗️${error.code}`);
})

server.listen(port)
