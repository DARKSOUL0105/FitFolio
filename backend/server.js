const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const getconn = require("./libs/DatabaseConnection");

const port = process.env.PORT || 5000;

//getting database connection from getconn function
const db = getconn();
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
});

const UserRouter = require("./route/User.Route");
const ExerciseRouter = require("./route/Exercise.Route");

app.use("/user", UserRouter);
app.use("/exercise", ExerciseRouter);

app.get("/", (req, res) => {
  res.send("testing suscceess");
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
