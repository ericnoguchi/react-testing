import React, { Component } from 'react';

// http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components
process.env.BROWSER && require('./about.scss');

export class About extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="container">about me</div>
    );
  }
}

