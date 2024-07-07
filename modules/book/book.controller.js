import book from "../../models/book.model.js";

export const getAllBooks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const totalCount = await book.countDocuments();

  const result = await book
    .find()
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();

  res.json({
    currentPage: page,
    totalPages: Math.ceil(totalCount / limit),
    totalBooks: totalCount,
    result,
  });
};

export const addNewBook = async (req, res) => {
  const result = await book.create(req.body);
  res.json(result);
};

export const getBookById = async (req, res) => {
  const result = await book.findById(req.params.bookId);
  res.json(result);
};

export const updateBook = async (req, res) => {
  const result = await book.findByIdAndUpdate(req.params.bookId, req.body, {
    new: true,
  });
  res.json(result);
};

export const deleteBook = async (req, res) => {
  const result = await book.findByIdAndDelete(req.params.bookId);
  res.json(result);
};

export const filterBooks = async (req, res) => {
  const searchQuery = req.query.search;

  const query = searchQuery
    ? {
        $or: [{ title: searchQuery }, { author: searchQuery }],
      }
    : {};
  const result = await book.find(query);
  res.json({ result });
};
