const items = require('./items.js');
const path = require('path');

module.exports = {
  webRoot: "https://kfatehi.github.io/react-static-site-generator-example/",
  templateRoot: path.join(__dirname, '/templates'),
  htmlRoot: __dirname,
  buildTemplates: [{
    template: 'index.jsx',
    output: 'index.html',
    params: { items }
  }].concat(items.map((item, i)=>({
    template: 'detail.jsx',
    output: `item-${i}.html`,
    params: { item }
  })))
}
