import http from 'http';
import api from './api/api.js';
import database from './api/config/database.js'

const port = 3000

const server = http.createServer(api)
// Por buena practica debemos definir un posible error o confirmar que se ha levantado el servidor
server.on('listening',() =>{
    console.log(`Servidor escuchando en el puert ${port}✅`);
}).on('error', (error)=>{
    if(error.code === "EADDRINUSE")
    console.log(`ha ocurrido un error ❗️${error.code}`);
})

server.listen(port)
database()
