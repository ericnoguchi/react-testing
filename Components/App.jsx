import React, { Component } from 'react';

export class AppComponent extends Component {

  handleClick() {
    alert(0);
  }
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <h1>{this.props.title}</h1>
          <button onClick={this.handleClick}>Click me</button>
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(this.props)
          }}></script>
          <script src="/js/app.js" />
        </body>
      </html>
    );
  }
}


