const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://wander:vicente@172.21.176.11:27017/wander',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
