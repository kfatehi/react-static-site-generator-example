var React = require('react');
var Layout = require('./layout.jsx');

module.exports = ({
  items
}) =>
<Layout title="Final" stylesheet="bio">
  <h1>Steps taken in conducting research and testing</h1>
  <ul>
    <li>Prepared a test environment</li>
    <li>Created a list of people to contact</li>
    <li>Asked people to use the interface</li>
    <li>Gathered feedback from participants</li>
  </ul>
  <h1>Conclusions</h1>
  <ul>
    <li>A JSON portfolio may be useful for agencies to aggregate member works</li>
    <li>There was no criticism of the dark-brown color theme</li>
  </ul>
  <h1>Actions</h1>
  <ul>
    <li>Exposed an <a href="portfolio.json">endpoint</a> which returns JSON of the portfolio.</li>
    <li>Kept the dark-brown color theme.</li>
  </ul>
</Layout>
