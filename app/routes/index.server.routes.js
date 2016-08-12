module.exports = function(app) {
  var staticpages = require('../controllers/staticpages.controller');

  var usersController = require('../controllers/users.controller');

  app.get('/', staticpages.renderHome);
  app.get('/about', staticpages.renderAbout);
  app.get('/contact', staticpages.renderContact)

  //restful routes
  app.get('/users', usersController.index)
};
