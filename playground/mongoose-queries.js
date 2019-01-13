const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id = '5c383c7351ae1b241c9f81f1'

// var id = '5c3aeda4e931e08c30d275c0'
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id is not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo By Id', todo)
// }).catch((e) => console.log(e));
//
// User.findById(id).then((user) => {
//   if (!user) {
//     return console.log("I can't find that user")
//   }
//   // console.log('Found User by Id', user)
//   console.log(JSON.stringify(user, undefined, 2))
// }).catch((e) => console.log(e));
