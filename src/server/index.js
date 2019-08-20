// @flow strict
/* eslint-disable import/no-extraneous-dependencies */
import 'core-js';
import 'regenerator-runtime/runtime';
import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import path from 'path';

const app = new Koa();

app.use(logger()); // log requests
app.use(serve(path.join(__dirname, '../static/'))); // serve static assets
app.listen(3001);
