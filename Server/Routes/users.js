const router = require("express").Router();
let User = require("../Models/User");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error dawg: " + err));
});

router.route("/register").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userName = req.body.userName;
  const email = req.body.email;
  const newUser = new User({ firstName, lastName, userName, email });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error dawwg: " + err));
});

module.exports = router;
