const config = require('config.json');
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || config.url;
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

mongoose.connect(mongoDB, connectionOptions)
  .then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

mongoose.Promise = global.Promise;
const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
  User: require('../users/user.model'),
  Post: require('../posts/post.model'),
  Page: require('../page/page.model')
};