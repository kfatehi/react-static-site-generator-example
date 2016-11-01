var React = require('react');
var Layout = require('./Layout.jsx');

module.exports = ({ item: { name } }) => <Layout title="Detail">
  this is detail for {name}
</Layout>
