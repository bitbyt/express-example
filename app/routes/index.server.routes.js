module.exports = function(app) {
  var staticpages = require('../controllers/staticpages.controller');

  app.get('/', staticpages.renderHome);
  app.get('/about', staticpages.renderAbout);
  app.get('/contact', staticpages.renderContact)
};
