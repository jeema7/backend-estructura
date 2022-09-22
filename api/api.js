import express from 'express'
import bookRoutes from './routes/bookRoutes.js'
import clientRoutes from './routes/ClientRoutes.js'

const api = express()
//TODO: Configurar Middlwares
//Los Middlwares enlazados comparten el mismo objeto req y res
//Por default express no acepta por default body tipo JSON
api.use(express.json())

api.get('/status', (req,res) =>{
    return res.json({
        msg: 'API en linea y funcionando'
    })
} )
// Reg de routes
api.use(bookRoutes)
api.use(clientRoutes)

export default api