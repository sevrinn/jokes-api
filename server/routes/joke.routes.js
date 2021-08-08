const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
  //get all jokes
  app.get("/api/jokes", JokeController.getAll);
  //create new joke
  app.post("/api/jokes", JokeController.create);
  //get single joke
  app.get("/api/jokes/:id", JokeController.getOne);
  //update single joke
  app.put("/api/jokes/:id", JokeController.update);
  //delete single joke
  app.delete("/api/jokes/:id", JokeController.delete);
} 