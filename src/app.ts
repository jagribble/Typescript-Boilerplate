import express from 'express';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';

// Create a new express application instance
const app: express.Application = express();
app.set('views', './src/views');
app.set('view engine', 'hbs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});