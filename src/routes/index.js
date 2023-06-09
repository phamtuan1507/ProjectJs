const meRouter = require('./me');
const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
function routes(app) {

  app.use('/me', meRouter);

  app.use('/courses', courseRouter);

  app.use('/news', newsRouter);
  
  app.use('/', siteRouter);
}
module.exports = routes;
