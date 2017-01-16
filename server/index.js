import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

const app = express(); 
app.use(express.static('./dist/public'));


app.get('/api/', function (req, res) {
  res.send('hello')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})





// console.log(ReactDOMServer.renderToString(<App name="hello5" />));
// console.log(ReactDOMServer.renderToString(<App name="hell" />));
