#!/usr/bin/env node
const util = require('../src/util');
const Promise = require('bluebird');
const config = require('../config.js');
const path = require('path');

util.createRenderer(config.templateRoot).then(render => {
  return Promise.map(config.buildTemplates, item => {
    return render(item.template, item.params).then(html => {
      const out = path.join(config.htmlRoot, item.output);
      return util.writeFile(out, html).then(() =>
        console.log('wrote '+path.basename(out)))
    })
  })
}).catch(err => {
  if ( err ) {
    console.log(err.stack);
    process.exit(1)
  }
});
