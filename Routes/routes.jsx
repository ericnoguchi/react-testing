import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { Layout } from '../Components/Layout/Layout.jsx';
import { Index } from '../Components/Index.jsx'
import { About } from '../Components/About/About.jsx'
import { PageNotFound } from '../Components/PageNotFound.jsx';

const createElement = (process.env.BROWSER) ? (Component, props) => <Component {...props} custom={window.PROPS} /> : null;

export default (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={Layout} >
            <IndexRoute component={Index} />
            <Route path='about' component={() => <About />} />
            <Route path='/404' component={PageNotFound} />
            <Redirect from='*' to='/404' />
        </Route>
    </Router>
) 