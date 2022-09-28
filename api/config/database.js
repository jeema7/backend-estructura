//Connecting to mongoose
import mongoose from 'mongoose';
import config from './index.js';

const db = mongoose.connection;
// Por buena practica debemos definir un posible error o confirmar que se ha conectado a la base de datos

db.on('connecting', () =>{
    console.log('Intentando conectar a la base de datos 🟠');
}).on('connected', () =>{
    console.log('se ha conectado a la base de datos ✅');
}).on('error', () => {
    console.log('ha ocurrido un error en la conexion de la base de datos ❌');
} )


export default () => {
    mongoose.connect(config.database.uri)
}