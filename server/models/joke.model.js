// import mongoose
const mongoose = require('mongoose');

//create schema
const JokeSchema = mongoose.Schema({
  jokeSetUp: {
    type: String
  },
  jokePunchline: {
    type: String
  }
}, {timestamps: true});

//export
module.exports = mongoose.model("Joke", JokeSchema);