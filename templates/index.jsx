var React = require('react');
var Layout = require('./Layout.jsx');

module.exports = ({ items }) => <Layout title="Index">
  this is the index
  { items.map((item, i) => <p key={i}>
    <a href={`/detail-${i}`}>
      {item.name}
    </a>
  </p>)}
</Layout>
