const _ = require('lodash'),
  path = require('path'),
  globby = require('globby'),
  helmet = require('helmet'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  isDev = process.env.NODE_ENV === 'development',
  express = require('express'),
  app = express(),
  PORT = process.env.PORT || 4000;

global['appConfig'] = isDev ? require('./config.dev.json') : require('./config.prod.json');
global['appConfig'] = _.merge(global['appConfig'], { isDev: isDev });
global['errorHandler'] = require('./features/core').errorHandler;

app.use(helmet())
app.disable('x-powered-by');
app.use(cookieParser());
app.use(bodyParser.json({ limit: '0.5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

const db = require('./db/models');
db.sequelize.sync().then(res => {
  // API Routes
  apiRoutes();
});

function apiRoutes() {
  globby([__dirname + '/features/*/**/*.policy.js']).then(policies => {
    policies.forEach(policyPath => {
      require(path.resolve(policyPath)).invokeRolesPolicies();
    });
  });

  // ========= Public routes
  // Examples public routes
  require('./features/examples')(app);
  // App public routes
  require('./features/app/app.routes')(app);
  // Content public routes
  require('./features/content/content-public.routes')(app);
  // ========= Secure routes
  // User's feature, this incldues auth middleware as well
  require('./features/users')(app);
  // Content public routes
  require('./features/content/content.routes')(app);

  // get all registered routes of express
  // app._router.stack.forEach((r: any) => {
  //   if (r.route && r.route.path) {
  //     console.log(r.route.path)
  //   }
  // });

  app.listen(PORT, () => {
    console.log(`Env: ${isDev ? 'Dev' : 'Prod'}`);
    console.log(`listening on http://localhost:${PORT}`);
  });

}
