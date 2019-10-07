const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://184.172.214.148:31899/cadastro',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;