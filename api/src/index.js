  const express = require('express');
  const mongoose = require('mongoose');
  const app = express();
  const routes = require('./routes.js')
  const cors = require('cors')
  // mongoose.connect('mongodb+srv://adriano:D@rkcorner321@cluster0-zlhp5.mongodb.net/test?retryWrites=true&w=majority', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // });

  app.use(cors())
  app.use(express.json())
  app.use(routes)
  
  app.listen(3333)