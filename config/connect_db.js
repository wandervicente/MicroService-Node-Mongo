const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://localhost:27017/cadastro',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
