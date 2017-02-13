import 'babel-register';
import express from 'express';
import routes from './routes/index.jsx';

const app = express();

app.use(express.static('./_dist'));
app.use(routes);

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
})