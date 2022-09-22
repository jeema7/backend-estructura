import express from 'express'
import bookRoutes from './routes/bookRoutes.js'

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

api.use(bookRoutes)

export default api