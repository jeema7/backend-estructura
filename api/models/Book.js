import mongoose from 'mongoose';

/**
 * Cosas para crear un modelo
 * 1.- Schema
 * 2.- Nombre
 */

const schema = new mongoose.Schema({
    author: String,
    title: String,
    genre: String,
    category: String,
    language: String,
    editorial: String,
    printingDate: Date,
    pages: Number,
    isbn: String,
    coverage: String,
})

export default mongose.model(Book, schema)