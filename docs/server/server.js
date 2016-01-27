import express from 'express';
import http from 'http';
import exphbs from 'express-handlebars';
import React from 'react';
import { renderToString } from '../../node_modules/react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './../routes';

const app = express();

app.use(express.static('dist'));
app.use(express.static('docs/dist'));

app.set('view engine', '.hbs');
app.set('views', './docs/');
app.engine('.hbs', exphbs({ extname: '.hbs', layout: false }));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(<RouterContext {...props} />);
      res.render('index', { markup })
    } else {
      res.sendStatus(404);
    }
  });
});

export default http.createServer(app);
