const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://wander:vicente98@172.21.152.214:27017/wander98',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
