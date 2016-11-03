var React = require('react');
var Layout = require('./Layout.jsx');

module.exports = ({
  items
}) =>
<Layout title="Midterm">
  <div className="banner">Welcome to my 133 Midterm!</div>

  <p className="blurb">
    For this midterm, I have created a small portfolio website.
    In order to keep the markup maintainable as items change, I
    have used
    React on the server-side for templating. This is the first
    time I have used React on the server-side.
  </p>

  <div className="portfolio-items">
    { items.map(({
      name,
      imgSrc
    }, i) =>
    <div className="item" key={i}>
      <a href={`/item-${i}`}>
        <img src={imgSrc}/>
        {name}
      </a>
    </div>)}
  </div>
</Layout>
