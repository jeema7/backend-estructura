import Book from '../models/Book.js';
//Body no existe en el Get

const getAllBooks = (req, res) => {
    return res.json({
        msg: 'Esta es la ruta GET de todos los libros'
    })
}//Como esto puede fallar , usamos un trycatch
const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body)
        return res.json({
            msg: 'libro creado',
            // newBoo espera la respuesta que viene en el body y la guarda , por eso retornamos book : newBook!
            book: newBook,
        })
    } catch (error) {
        return res.json({
            msg: 'Errot al crear libro'
        })
    }
    
   
  

}
const getBookById = (req, res) => {}
const updateBookById = (req, res) => {}
const deleteBookById = (req, res) => {}


export {
    getAllBooks,
    createBook,
    getBookById,
    updateBookById,
    deleteBookById
};