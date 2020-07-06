'use strict';

const mongoose = require('mongoose');
const serverMod = require('./lib/server');
serverMod.start(); 
const MONGO_URL = 'mongodb://sondos-admin:test123@users-shard-00-00-q63hp.mongodb.net:27017,users-shard-00-01-q63hp.mongodb.net:27017,users-shard-00-02-q63hp.mongodb.net:27017/test?replicaSet=Users-shard-0&ssl=true&authSource=admin';
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(MONGO_URL,mongooseOptions);
