import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
    },
    headerPhoto: {
      type: String,
    },
    parentCategory: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    paths: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categoriesSchema);
