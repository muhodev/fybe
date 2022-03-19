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
    content: {
      type: String,
      required: true,
    },
    excerptContent: {
      type: String,
      required: true,
    },
    // for question type posts
    isClosed: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: [
        "post",
        "question",
        "blog",
        "poll",
        "event",
        "advertisement",
        "job",
        "sponsor",
      ],
      default: "",
    },
    canComment: {
      type: Boolean,
      default: true,
    },
    statistics: {
      likes: {
        type: Number,
        default: 0,
      },
      comments: {
        type: Number,
        default: 0,
      },
      shares: {
        type: Number,
        default: 0,
      },
      views: {
        type: Number,
        default: 0,
      },
    },
    media: [
      {
        format: { type: String, enum: ["video", "image", "audio"] },
        url: { type: String, required: true },
      },
    ],
    draft: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: [
        "published",
        "draft",
        "pending",
        "confirmed",
        "banned",
        "attackerContent",
        "inappropriateContent",
        "userBanned", // if author banned we will change post status to this
      ],
      default: "pending",
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Tag = mongoose.model("Tag", tagsSchema);
