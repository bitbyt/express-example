module.exports.renderHome = function(req, res) {
  res.render('static_pages/index', {
    title: 'Hello WDI, Welcome to Express',
    subtitle: 'A simple express.js site.'
  });
};

module.exports.renderAbout = function(req, res) {
  res.render('static_pages/about', {
    title: 'Read more about us',
    subtitle: 'We build simple express.js sites.'
  });
};

module.exports.renderContact = function(req, res) {
  res.render('static_pages/contact', {
    title: 'Welcome to the Contact Page',
    subtitle: 'Come, let\'s chat!'
  });
};
