require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const videogameRoutes = require("./routes/videogames");

// calling express to run.
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// these are the routes
app.use("/api/videogames", videogameRoutes);

// connect to the db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

process.env;
