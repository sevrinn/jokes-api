const Joke = require('../models/joke.model');

//get all jokes
module.exports.getAll = (req, res) => {
  console.log("inside get all");

  Joke.find()
  .then((allJokes) => {
    console.log(allJokes);
    //equivalent of return
    res.json(allJokes);
  })
  .catch((err)=> {
    console.log(err);
    res.json(err);
  })
};
//create joke
module.exports.create = (req, res) => {
  console.log("inside create");
  console.log(req.body);

  Joke.create(req.body)
  .then((newJoke) => {
    console.log(newJoke);
    res.json(newJoke);
  })
  .catch((err)=> {
    console.log(err);
    // change the response object status to 400, so client can see the error
    // then send error in json back to the client
    res.status(400).json(err);
  })
}
//get single joke
module.exports.getOne = (req, res) => {
  console.log("inside get one");
  console.log("looking for id: " + req.params.id);

  Joke.findById(req.params.id)
  .then((oneJoke) => {
    console.log(oneJoke);
    res.json(oneJoke);
  })
  .catch((err)=> {
    console.log(err);
    // change the response object status to 400, so client can see the error
    // then send error in json back to the client
    res.status(400).json(err);
  })
}
//update single joke
module.exports.update = (req, res) => {
  console.log( "inside update" );
  console.log("looking for id: " + req.params.id);
  console.log(req.body);

  Joke.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  .then((updatedJoke) => {
    console.log(updatedJoke);
    res.json(updatedJoke);
  }) 
  .catch((err)=> {
    console.log(err);
    // change the response object status to 400, so client can see the error
    // then send error in json back to the client
    res.status(400).json(err);
  })
}

//delete singe joke
module.exports.delete = (req, res) => {
  console.log( "inside delete" );
  console.log("looking for id: " + req.params.id);

  Joke.findByIdAndDelete(req.params.id)
  .then((deletedJoke) => {
    console.log(deletedJoke);
    res.json(deletedJoke);
  })
  .catch((err)=> {
    console.log(err);
    // change the response object status to 400, so client can see the error
    // then send error in json back to the client
    res.status(400).json(err);
  })
}