import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { AppComponent } from '../Components/App.jsx';
import { Index } from '../Components/Index.jsx'
import { About } from '../Components/About.jsx'


if (typeof window === 'object') {
    var createElement = (Component, props) => <Component {...props} custom={window.PROPS} />;
}


export default (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={AppComponent} >
            <IndexRoute component={Index} />
            <Route path='about' component={About} />
        </Route>
    </Router>
) 