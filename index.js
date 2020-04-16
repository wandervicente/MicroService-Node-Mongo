const express = require('./config/server');
const rotaHome = require('./app/routes/home')(express);
const rotaUsers = require('./app/routes/users')(express);
const mongo = require('./config/connect_db');

express.post('/item/add', (req, res) => {
  const newItem = new Item({
    sensor: req.body.sensor,
    nome: req.body.nome,
    tipo: req.body.tipo,
    estado: req.body.estado,
    valor: req.body.valor
  });

  newItem.save().then(item => res.redirect('/'));
});

express.listen(8080, () => console.log('Server running...'));
