var React = require('react');
var Layout = require('./Layout.jsx');


module.exports = ({
  item: {
    name,
    imgSrc,
    url,
    src,
    description
  }
}) =>
<Layout title={`Portfolio: ${name}`}>
  <div className="banner">
    <img className="detail-image" src={imgSrc}/>
  </div>
  { url ? <p>URL: <a href={url}>{url}</a></p> : null }
  { src ? <p>Source: <a href={src}>{src}</a></p> : null }
  <p className="blurb" dangerouslySetInnerHTML={{__html: description}}/>
  <hr/>
  <a href='index.html'>Back</a>
</Layout>
