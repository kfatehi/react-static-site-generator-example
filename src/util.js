const Promise = require('bluebird');
const glob = Promise.promisify(require('glob'));
const ExpressReactViews = require('express-react-views').createEngine;
const fs = require('fs');
const writeFile = Promise.promisify(fs.writeFile);
const path = require('path');

// Resolves with a function taking a template filename (in templateRoot) 
// and parameters (React props) and resolving the HTML
function createRenderer(templateRoot) {
  return glob(templateRoot+'/**/*.jsx').then(views => (name, params) => {
    var render = Promise.promisify(ExpressReactViews({ beautify: true }))
    var renderOptions = Object.assign({ settings: { views } }, params);
    return render(path.join(templateRoot, name), renderOptions)
  })
}

module.exports = {
  createRenderer,
  writeFile
}
