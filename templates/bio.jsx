var React = require('react');
var Layout = require('./layout.jsx');

module.exports = ({
  items
}) =>
<Layout title="Bio" stylesheet="bio">
  <div className="portrait">
    <img src="img/self.jpeg" alt="keyvan's picture"></img>
  </div>
  <p>Keyvan is a technology generalist with 7 consistent years of industry IT experience: consulting, startups, and "9 to 5".</p>
  
  <p>He has considerable practical experience building systems, working with modern, JavaScript-heavy front-end technologies, and implementing infrastructure. His roles and responsiblities have spanned those of systems architect, programmer, project manager, and many more.</p>
  
  <p>An advocate for freedom, Keyvan is a frequent contributor to open source.</p>

  <p>You can email him at <a href="mailto:kfatehi@uci.edu">kfatehi@uci.edu</a></p>
</Layout>
