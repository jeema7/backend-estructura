import express, { application } from 'express'
import bookRoutes from './routes/bookRoutes.js'

const api = express()
//TODO: Configurar Middlwares
api.get('/status', (req,res) =>{
    return res.json({
        msg: 'API en linea y funcionando'
    })
} )
api.use(bookRoutes)

export default api