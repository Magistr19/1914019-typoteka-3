'use strict';

const express = require(`express`);

const mainRoutes = require(`./routes/main-routes`);
const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);

const {DEFAULT_PORT} = require(`../constants`);

const app = express();

app.use(`/`, mainRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);

app.listen(DEFAULT_PORT);
