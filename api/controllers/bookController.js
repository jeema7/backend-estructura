import Book from "../models/Book.js";
//Body no existe en el Get

const getAllBooks = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: "Libros encontrados",
      data: books,
    });
  } catch (error) {
    return res.json({
      msg: "Error al encontrar un libro",
      error,
    });
  }
}; 

//Como esto puede fallar , usamos un trycatch
const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      // status 200
      msg: "libro creado",
      // newBoo espera la respuesta que viene en el body y la guarda , por eso retornamos book : newBook!
      data: {
        book: newBook,
      },
    });
  } catch (error) {
    // Que status code mandar?
    return res.status(500).json({
      msg: "Error al crear libro",
      error,
    });
  }
};
// Obtenemos el id por params
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        msg: "No existe el libro",
      });
    }
    return res.json({
      msg: "Libro encontrado",
      data: {
        book,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar libro por id",
      error,
    });
  }
};
const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body,{new: true});
    return res.json({
      msg: "Libro actualizado",
      data: { book: updatedBook },
    });
  } catch (error) {
    return res.status(500).json({
      msn: "Error al actualizar lirbo",
      error,
    });
  }
};
const deleteBookById = async (req, res) => {
  try {
    const {id} = req.params;
    await Book.findByIdAndDelete(id)
    return res.json({
      msg: "Elemento eliminado"
    })
  } catch (error) {
    return res.status(500).json({
      msg:"Error al borrar libro por id ",
      error
    })
  }
};

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById};
