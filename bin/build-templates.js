#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const config = require('../config.js');
const glob = Promise.promisify(require('glob'));
const ExpressReactViews = require('express-react-views').createEngine;
const writeFile = Promise.promisify(fs.writeFile);

// Resolves with a function taking a template filename (in templateRoot) 
// and parameters (React props) and resolving the HTML
function createRenderer(templateRoot) {
  return glob(templateRoot+'/**/*.jsx').then(views => (name, params) => {
    var render = Promise.promisify(ExpressReactViews({ beautify: true }))
    var renderOptions = Object.assign({ settings: { views } }, params);
    return render(path.join(templateRoot, name), renderOptions)
  })
}

createRenderer(config.templateRoot).then(render => {
  return Promise.map(config.buildTargets, item => {
    const out = path.join(config.htmlRoot, item.output);
    if ( item.template ) {
      return render(item.template, item.params).then(html => {
        return writeFile(out, html).then(() =>
          console.log('wrote '+path.basename(out)))
      })
    } else if ( item.generate ) {
      return writeFile(out, item.generate()).then(() =>
        console.log('wrote '+path.basename(out)))
    }
  })
}).catch(err => {
  if ( err ) {
    console.log(err.stack);
    process.exit(1)
  }
});
