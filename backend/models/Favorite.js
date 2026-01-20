const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  url: String,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
