import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema(
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
    },
    cover: {
      type: String,
    },
    headerPhoto: {
      type: String,
    },
    relatedCategories: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Tag = mongoose.model("Tag", tagsSchema);
