import React, { Component } from 'react';

export class AppComponent extends Component {
    render() {
      return (
         <h1 className="hello1">{this.props.initData.x}</h1>
      );
    }
}

 
