exports.client = (req, res) => {
  res.status(404).render('error', {
    statusCode: 404,
    errorMessage: 'Page not found',
    back: "/",
    cssPath: '/css/error.css',
    pageTitle: 'Error'
  });
};

exports.server = (err, req, res) => {
  res.status(500).render('error', {
    statusCode: 500,
    errorMessage: 'Internal server error',
    back: "/",
    cssPath: '/css/error.css',
    pageTitle: 'Error'
  });
};