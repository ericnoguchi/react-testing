import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';


import path from 'path';

const app = express();
const router = express.Router();
const viewPath = path.join(__dirname, 'views');

app.set('views', viewPath);
app.set('view engine', 'ejs');

app.use(express.static('./dist/public'));

app.get('/', function (req, res) {
  res.render('pages/index');
})



app.get('/api', function (req, res) {
  res.render('pages/index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})





// console.log(ReactDOMServer.renderToString(<App name="hello5" />));
// console.log(ReactDOMServer.renderToString(<App name="hell" />));
