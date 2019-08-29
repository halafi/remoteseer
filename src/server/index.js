// @flow
/* eslint-disable import/no-extraneous-dependencies */
import 'core-js';
import 'regenerator-runtime/runtime';
import Koa from 'koa';
import type { Context } from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import path from 'path';
import markup from './services/markup/index';

const app = new Koa();

app.use(logger()); // log requests
app.use(serve(path.join(__dirname, '../static/'))); // serve static assets

// render pages on demand
app.use(async (ctx: Context, next: () => Promise<void>) => {
  if (ctx.path.includes('.')) {
    // could handle other than .html resources
    next();
  } else {
    // eslint-disable-next-line no-console
    console.log(`[server] rendering: ${ctx.url}`);
    ctx.status = 200;
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = markup(ctx.url);
  }
});

app.listen(3001);
