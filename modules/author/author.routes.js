import { Router } from "express";
import {
  addNewAuthor,
  deleteAuthor,
  filterAuthors,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
} from "./author.controller.js";
import { checkAuthorId } from "./author.middlewares.js";

const authorRouter = Router();

authorRouter.route("/").get(getAllAuthors).post(addNewAuthor);
authorRouter.route("/filter").get(filterAuthors);
authorRouter
  .route("/:authorId")
  .get(checkAuthorId, getAuthorById)
  .patch(checkAuthorId, updateAuthor)
  .delete(checkAuthorId, deleteAuthor);

export default authorRouter;
