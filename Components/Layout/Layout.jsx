import React, { Component } from 'react';
import { Link } from 'react-router';
import { add } from '../tree-shaking-test.js';

// http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
process.env.BROWSER && require('./layout.scss');


export class Layout extends Component {
  handleClick() {
    console.log(add(3, 3))

  }
  render() {
    let { custom, children } = this.props;
    return (
      <html>
        <head>
          <title>{custom.title}</title>
          <link rel="stylesheet" type="text/css" href="css/app.css" />
        </head>
        <body>
          <h1>{custom.title}</h1>
          <button onClick={this.handleClick}>Click me</button>
          {children}
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/foo">404</Link>
            </li>
          </ul>
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(custom)
          }}></script>

          <script src="js/webpack-bootstrap.js"></script>
          <script src="js/vendor.js"></script>
          <script src="js/app.js" />
        </body>
      </html>
    );
  }
}

