import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Bap = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    contents: {
      type: String,
      required: true,
    },

    created: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Bap`, Bap, `Bap`);
