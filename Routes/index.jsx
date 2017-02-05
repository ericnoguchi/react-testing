import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router'
import routes from './routes.jsx';

const expressRouter = express.Router();
expressRouter.get('*', (req, res) => {

    const props = { title: 'Universal App done' };

    match({
        routes: routes,
        location: req.url
    }, (err, redirectLocation, renderProps) => {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        }
        else if (renderProps) {
            const html = renderToString(<RouterContext {...renderProps}
                createElement={(Component, renderProps) =>
                    <Component {...renderProps} custom={props} />} />);

            res.send(`<!DOCTYPE html>${html}`);

        } else {
            res.status(404).send('route not found');
        }
    });
})

export default expressRouter;