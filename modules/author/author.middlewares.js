import author from "../../models/author.model.js";

//middleware to check authorId
export const checkAuthorId = async (req, res, next) => {
  const authorId = req.params.authorId;
  // Check if the author with the specified ID exists
  const existingAuthor = await author.findById(authorId);

  if (!existingAuthor) {
    return res.status(404).json({ message: "This author ID does not exist." });
  }
  next();
};
