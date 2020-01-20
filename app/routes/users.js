const Item = require('../models/Item');
module.exports = function(express){
    express.get('/cadastrados', (req, res) => {
        Item.find()
          .then(items => res.render('users/cadastrados', { items }))
          .catch(err => res.status(404).json({ msg: 'No items found' }));
      });
}