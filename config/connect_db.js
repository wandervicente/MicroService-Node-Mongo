const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://admin:senha@172.21.254.11:27017/testemongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
