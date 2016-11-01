var React = require('react');

module.exports = ({title, children}) => <html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>{children}</body>
</html>
