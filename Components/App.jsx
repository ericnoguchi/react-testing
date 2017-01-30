import React, { Component } from 'react';
import { Link } from 'react-router'

export class AppComponent extends Component {
  handleClick() {
    alert(0);
  }
  render() {
    let custom = this.props.custom;
    return (
      <html>
        <head>
          <title>{custom.title}</title>
        </head>
        <body>
          <h1>{custom.title}</h1>
          <button onClick={this.handleClick}>Click me</button>
          {this.props.children}
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(custom)
          }}></script>
          <script src="/js/app.js" />

        </body>
      </html>
    );
  }
}

