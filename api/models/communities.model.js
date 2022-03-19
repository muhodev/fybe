import mongoose from "mongoose";

const communitiesSchema = new mongoose.Schema(
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
    owners: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    moderators: [
      {
        user: {
          type: mongoose.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rules: [],
      },
    ],
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tags: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Tag",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Community = mongoose.model("Community", communitiesSchema);
