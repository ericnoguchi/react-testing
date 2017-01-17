import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './Components/App.jsx';

ReactDOM.render(<AppComponent initData={window.__INITIAL_STATE__ || {}} />,
    document.getElementById('reactMount'));
  