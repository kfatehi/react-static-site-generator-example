const path = require('path');

var items = [{
  name: "foo"
},{
  name: 'bar'
}]

function itemsDetails() {
  
}

module.exports = {
  templateRoot: path.join(__dirname, '/templates'),
  htmlRoot: __dirname,
  buildTemplates: [{
    template: 'index.jsx',
    output: 'index.html',
    params: { items }
  }].concat(items.map((item, i)=>({
    template: 'detail.jsx',
    output: `detail-${i}.html`,
    params: { item }
  })))
}
