const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const videogameSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    sku: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Videogame", videogameSchema);
