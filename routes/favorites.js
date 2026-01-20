const express = require("express");
const router = express.Router();
const Favorite = require("../models/Favorite");

// Get all favorites
router.get("/", async (req, res) => {
  const favorites = await Favorite.find();
  res.json(favorites);
});

// Save favorite
router.post("/", async (req, res) => {
  const favorite = new Favorite(req.body);
  await favorite.save();
  res.json({ message: "Saved successfully" });
});

// Delete favorite
router.delete("/:id", async (req, res) => {
  await Favorite.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
