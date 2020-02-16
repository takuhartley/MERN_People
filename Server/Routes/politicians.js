const router = require("express").Router();
import User from "../Models/Politician";

router.route("/").get((req, res) => {
  Politician.find()
    .then(politician => res.json(politician))
    .catch(err => res.status(400).json(`Error dawg: ${err}`));
});

router.route("/create").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const description = req.body.description;
  const newPolitician = new User({ firstName, lastName, description});
  newPolitician
    .save()
    .then(() => res.json("Politician Created"))
    .catch(err => res.status(400).json(`Error dawg: ${err}`));
});

// router.route("/edit/:id").post((req, res) => {
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const description = req.body.description;
//     const newPolitician = new User({ firstName, lastName, description});
//     newPolitician
//       .save()
//       .then(() => res.json("Politician Created"))
//       .catch(err => res.status(400).json(`Error dawg: ${err}`));
//   });

//   router.route("/delete/:id").post((req, res) => {
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const description = req.body.description;
//     const newPolitician = new User({ firstName, lastName, description});
//     newPolitician
//       .save()
//       .then(() => res.json("Politician Created"))
//       .catch(err => res.status(400).json(`Error dawg: ${err}`));
//   });

export default router;