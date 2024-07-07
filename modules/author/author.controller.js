import author from "../../models/author.model.js";

export const getAllAuthors = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const totalCount = await author.countDocuments();

  const result = await author
    .find()
    .populate("books", "-_id")
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();

  res.json({
    currentPage: page,
    totalPages: Math.ceil(totalCount / limit),
    totalAuthors: totalCount,
    result,
  });
};

export const addNewAuthor = async (req, res) => {
  const result = await author.create(req.body);
  res.json(result);
};

export const getAuthorById = async (req, res) => {
  const result = await author
    .findById(req.params.authorId)
    .populate("books", "-_id");
  res.json(result);
};

export const updateAuthor = async (req, res) => {
  const result = await author.findByIdAndUpdate(req.params.authorId, req.body, {
    new: true,
  });
  res.json(result);
};

export const deleteAuthor = async (req, res) => {
  const result = await author.findByIdAndDelete(req.params.authorId);
  res.json(result);
};

export const filterAuthors = async (req, res) => {
  const searchQuery = req.query.search;

  const query = searchQuery
    ? {
        $or: [{ name: searchQuery }, { bio: searchQuery }],
      }
    : {};
  const result = await author.find(query).populate("books", "-_id");
  res.json({ result });
};
