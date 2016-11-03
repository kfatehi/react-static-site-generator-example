var React = require('react');
var Layout = require('./Layout.jsx');


module.exports = ({
  config: {
    webRoot
  },
  item: {
    name,
    imgSrc,
    description
  }
}) =>
<Layout title={`Portfolio: ${name}`}>
  <div className="banner">
    <img className="detail-image" src={webRoot+imgSrc}/>
  </div>
  <p className="blurb" dangerouslySetInnerHTML={{__html: description}}/>
  <hr/>
  <a href={webRoot+'index.html'}>Back</a>
</Layout>
