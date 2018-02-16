const template_engine = 'dust';
const domain = 'localhost';

const express = require('express');
const routes = require('./routes');
const sassMiddleware = require('node-sass-middleware')
const http = require('http');
const path = require('path');

const app = express();

if (template_engine == 'dust') {
  const dust = require('dustjs-linkedin');
  const cons = require('consolidate');

  app.engine('dust', cons.dust);
}

app.set('template_engine', template_engine);
app.set('domain', domain);
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', template_engine);
app.use(sassMiddleware({
  src: path.join(__dirname, 'resources'),
  dest: path.join(__dirname, 'resources'),
  debug: true,
  outputStyle: 'compressed',
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'resources')));

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), () => {
  console.log("Express server listening on port " + app.get('port'));
});
