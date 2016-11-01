var Promise = require('bluebird');
var glob = Promise.promisify(require('glob'));
var ExpressReactViews = require('express-react-views').createEngine

glob(__dirname+'/../views/**/*.jsx').then(views => (name, params) => {
  var render = Promise.promisify(ExpressReactViews({ beautify: true }))
  var renderOptions = Object.assign({ settings: { views } }, params);
  return render(__dirname+'/../views/'+name, renderOptions)
}).then(function(render) {
  return render('index.jsx', { name: 'hi' })
}).then(function(html) {
  console.log(html);
})
