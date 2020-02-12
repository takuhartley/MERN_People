const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
let User = require('./Models/User');
const PORT = 4000;
// const UserRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/Person", { useNewUrlParser: true });
// app.use('/todos', todoRoutes)
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection is in fam");
});
PeopleRoutes.route('/').get(function(req, res) {
    User.find(function(err, Person) {
        if (err) {
            console.log(err);
        } else {
            res.json(Person);
        }
    });
});

// UserRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     User.findById(id, function(err) {
//         res.json(todo);
//     });
// });
// UserRoutes.route('/add').post(function(req, res) {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });
// UserRoutes.route('/update/:id').post(function(req, res) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send('data is not found');
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo updated');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });
//app.use('/todos', todoRoutes);

app.listen(PORT, function() {
  console.log("We're connected broski on Port: " + PORT);
});