const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
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

app.use(express.json());
app.use(cors());
// app.get("/test", (req, res) => {
//   res.send("Testing success");
// });

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
