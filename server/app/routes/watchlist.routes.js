module.exports = app => {
  const {checkToken} = require('../middleware/');
  const controller = require('../controllers/watchlist.controller.js');
  app.post('/api/watchlist', checkToken, controller.create);
  app.get('/api/watchlist', checkToken, controller.findAll);
  app.put('/api/watchlist/:movieId', checkToken, controller.update);
  app.delete('/api/watchlist/:movieId', checkToken, controller.delete);
};
