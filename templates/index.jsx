var React = require('react');
var Layout = require('./Layout.jsx');

module.exports = ({
  items
}) =>
<Layout title="Midterm">
  <div className="banner">Welcome to my 133 Midterm!</div>

  <div className="blurb">
    <p>
      In order to keep the markup maintainable, I
      have used React as a template engine with which I generate
      the static HTML markup.
    </p>
    <p>
      Items are described in
      a <a href="/items.js">JavaScript file</a> which
      is used to generate the static markup you see here.
      I wanted to show that modern web tooling such as Node and
      React can be used to build a website without forcing the users
      to have JavaScript enabled in order to use the site.
    </p>
    <p>
      In fact
      I inverted the JavaScript challenge of the midterm
      in on itself and challenged myself to use no JavaScript in the
      browser, but use as much as I wanted on the server side, for 
      the asset build pipeline. I did this because so often these days
      we see sites that don't degrade well and depend wholly on
      JavaScript in order to render at all. This project shows
      that, using React, we can have the best of both worlds.
    </p>
    <p>Thank you and please enjoy my portfolio.</p>
  </div>

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
