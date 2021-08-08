//import express and other libraries
const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();

//configure express app server
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configure mongoose to connect
require('./config/mongoose.config');
//

//start app server listening
app.listen(8000, () => {
  console.log("express app server is listening on port " + 8000);
})

