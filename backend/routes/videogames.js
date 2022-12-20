const express = require("express");
const {
  getVideogames,
  getVideogame,
  createVideogame,
  deleteVideogame,
  updateVideogame
} = require("../controllers/videogameController");

const router = express.Router();

//GET all videogame list
router.get("/", getVideogames);

// GET a single video game id
router.get("/:id", getVideogame);

// POST a new videogame to database
router.post("/", createVideogame);

// DELETE a new videogame to database
router.delete("/:id", deleteVideogame)
  
// UPDATE a new videogame to database
router.patch("/:id", updateVideogame)
  
module.exports = router;
