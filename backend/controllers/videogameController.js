const Videogame = require("../models/videogameModel");
const mongoose = require("mongoose");

// get all games

const getVideogames = async (req, res) => {
  const videogames = await Videogame.find({}).sort({ createdAt: -1 });

  res.status(200).json(videogames);
};

// get a single videogame
const getVideogame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such game" });
  }

  const videogame = await Videogame.findById(id);

  if (!videogame) {
    return res.status(404).json({ error: "No such game" });
  }

  res.status(200).json(videogame);
};

// create a new videogame
const createVideogame = async (req, res) => {
  const { title, desc, type, price, platform, sku } = req.body;

  // add to the database
  try {
    const videogame = await Videogame.create({
      title,
      desc,
      type,
      price,
      platform,
      sku,
    });
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a videogame
const deleteVideogame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such game" });
  }

  const videogame = await Videogame.findOneAndDelete({ _id: id });

  if (!videogame) {
    return res.status(400).json({ error: "No such game" });
  }

  res.status(200).json(videogame);
};
// update videogame
const updateVideogame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such game" });
  }

  const videogame = await Videogame.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!videogame) {
    return res.status(400).json({ error: "No such game" });
  }

  res.status(200).json(videogame);
};

module.exports = {
  getVideogames,
  getVideogame,
  createVideogame,
  deleteVideogame,
  updateVideogame,
};
