import book from "../../models/book.model.js";

//middleware to check bookId
export const checkBookId = async (req, res, next) => {
  const bookId = req.params.bookId;
  // Check if the book with the specified ID exists
  const existingBook = await book.findById(bookId);

  if (!existingBook) {
    return res.status(404).json({ message: "This book ID does not exist." });
  }
  next();
};
