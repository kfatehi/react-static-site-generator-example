const items = require('./items.js');
const path = require('path');

module.exports = {
  templateRoot: path.join(__dirname, '/templates'),
  htmlRoot: __dirname,
  buildTargets: [{
    template: 'index.jsx',
    output: 'index.html',
    params: { items }
  },{
    template: 'bio.jsx',
    output: 'bio.html'
  },{
    template: 'final.jsx',
    output: 'final.html'
  },{
    output: 'portfolio.json',
    generate: () => JSON.stringify(items, null, 4)
  }].concat(items.map((item, i)=>({
    template: 'detail.jsx',
    output: `item-${i}.html`,
    params: { item }
  })))
}
