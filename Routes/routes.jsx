import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import { AppComponent } from '../Components/App.jsx';

if (typeof window === 'object') {
    var createElement = (Component, props) => <Component {...props} {...window.PROPS} />;
}


export default (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={AppComponent} >
        </Route>
    </Router>
) 