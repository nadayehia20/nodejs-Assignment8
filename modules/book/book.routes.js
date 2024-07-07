import { Router } from "express";
import {
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
  addNewBook,
  filterBooks,
} from "./book.controller.js";
import { checkBookId } from "./book.middlewares.js";

const bookRouter = Router();

bookRouter.route("/").get(getAllBooks).post(addNewBook);
bookRouter.route("/filter").get(filterBooks);
bookRouter
  .route("/:bookId")
  .get(checkBookId, getBookById)
  .patch(checkBookId, updateBook)
  .delete(checkBookId, deleteBook);

export default bookRouter;
