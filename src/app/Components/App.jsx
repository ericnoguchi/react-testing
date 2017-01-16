import React, { Component } from 'react';

export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            initData : props.initData || window.__INITIAL_STATE__
        };
    }
    render() {
      return ( 
         <h1 className="hello1">{this.state.initData.x}</h1>
      );
    }
}


