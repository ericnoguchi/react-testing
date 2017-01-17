import 'babel-register';
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import AppComponent from '../src/app/Components/App.jsx';

let a = {a:1};
let b = {c:1, ...a};

const app = express();
const router = express.Router();
const viewPath = path.join(__dirname, 'views');

app.set('views', viewPath);
app.set('view engine', 'ejs');

app.use(express.static('./dist/public'));

app.get('/', (req, res) => {

  const initData = { x: (new Date).toTimeString() };

  const ren = renderToString(<AppComponent initData={initData} />);

  res.render('pages/index', {
    AppComponent: ren,
    initData: JSON.stringify(initData)
  });

})
app.get('/about', (req, res) => {
  res.render('pages/index');
})
app.get('/contact', (req, res) => {
  res.render('pages/index');
})


app.get('/api', (req, res) => {
  res.render('pages/index');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
