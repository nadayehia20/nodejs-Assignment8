import express from "express";
import "./database/dbConnection.js";
import bookRouter from "./modules/book/book.routes.js";
import authorRouter from "./modules/author/author.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
