const data = require('../data/data.json');

exports.index = function(req, res) {
  const models = data.models;
  const cars = data.cars;
  const template_engine = req.app.settings.template_engine;
  res.locals.session = req.session;
  res.render('index', {
    title: 'Hi you! Look, I am an Express App with ' + template_engine + ' templates ;)', 
    models: models,
    cars: cars
  });
};
