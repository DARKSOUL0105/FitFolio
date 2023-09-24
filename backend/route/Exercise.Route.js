const router = require("express").Router();
const Exercise = require("../models/Exercise.Model");
let ExerciseModel = require("../models/Exercise.Model");

router.route("/").get((req, res) => {
  ExerciseModel.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const Exercise = new ExerciseModel({
    username,
    description,
    duration,
    date,
  });
  Exercise.save()
    .then(() => {
      res.json("Exercise Added!");
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

module.exports = router;
