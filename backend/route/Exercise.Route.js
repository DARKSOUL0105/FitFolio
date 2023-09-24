const router = require("express").Router();
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

router.route("/:id").get((req, res) => {
  let id = req.params.id;
  ExerciseModel.findById(id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/delete/:id").get((req, res) => {
  let id = req.params.id;
  ExerciseModel.findByIdAndDelete(id)
    .then(() => res.json("Exercise Deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  let id = req.params.id;
  ExerciseModel.findByIdAndUpdate(id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.duration = Number(req.body.duration);
      exercise.description = req.body.description;
      exercise.date = Date.parse(req.body.date);
      exercise
        .save()
        .then(() => res.json("Updated Successfully!"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
