import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const author = mongoose.model("Author", authorSchema);

export default author;
