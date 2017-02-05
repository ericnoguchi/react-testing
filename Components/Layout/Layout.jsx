import React, { Component } from 'react';
import { Link } from 'react-router'

// http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
if (process.env.BROWSER) {
  require('./layout.scss');
  console.log('lalala')
}

export class Layout extends Component {
  handleClick() {
    alert(0);
  }
  render() {
    let {custom, children} = this.props;
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
          <script src="vendor.js"></script>
          {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router/3.0.2/react-router.js" />*/}
          <script src="app.js" />
        </body>
      </html>
    );
  }
}

