const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  sensor: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  valor: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
