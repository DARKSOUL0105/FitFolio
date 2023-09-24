const router = require("express").Router();
let UserModel = require("../models/User.Model");

router.route("/").get((req, res) => {
  UserModel.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newuser = new UserModel({ username });
  newuser
    .save()
    .then(() => res.json("User Added !"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
