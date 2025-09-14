require('rootpath')();
require('reflect-metadata');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./app/_middleware/error-handler');
const AppDataSource = require('./database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow cors requests from any origin and with credentials
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

// api routes
app.use('/users', require('./app/users/user.controller'));
app.use('/posts', require('./app/posts/post.controller'));
app.use('/downloads', require('./app/downloads/download.controller'));

// global error handler
app.use(errorHandler);

// initialize database and start server
const port = 8080;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connection established successfully');

    // start server
    const server = app.listen(port, function () {
      console.log('Server listening on port ' + port);
    });
  })
  .catch((error) => {
    console.error('Error during database initialization:', error);
    process.exit(1);
  });
