var React = require('react');
var Nav = require('./nav.jsx');

module.exports = ({
  title, children, stylesheet
}) =>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="author" content="Keyvan Fatehi" />
    <title>{title}</title>
    <link rel="stylesheet" type="text/css" href='css/style.css'/>
    {stylesheet ?
      <link rel="stylesheet" type="text/css" href={`css/${stylesheet}.css`}/>
      : null }
  </head>
  <body>
    <header><Nav /></header>
    <hr/>
    <section>{children}</section>
    <hr/>
    <footer>Copyright 2016, Keyvan Fatehi</footer>
  </body>
</html>

