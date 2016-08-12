module.exports.renderHome = function(req, res) {
  res.render('static_pages/index', {
    title: 'Hello WDI, Welcome to Express'
  });
};

module.exports.renderAbout = function(req, res) {
  res.render('static_pages/about', {
    title: 'Read more about us'
  });
};

module.exports.renderContact = function(req, res) {
  res.render('static_pages/contact', {
    title: 'Welcome to the Contact Page'
  });
};
