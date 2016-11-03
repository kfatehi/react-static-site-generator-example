var React = require('react');
var Layout = require('./Layout.jsx');


module.exports = ({
  item: {
    name,
    imgSrc,
    description
  }
}) =>
<Layout title={`Portfolio: ${name}`}>
  <div className="banner">
    <img className="detail-image" src={imgSrc}/>
  </div>
  <p className="blurb" dangerouslySetInnerHTML={{__html: description}}/>
  <hr/>
  <a href='index.html'>Back</a>
</Layout>
