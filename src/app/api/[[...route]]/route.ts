/* eslint-disable @typescript-eslint/no-unused-vars */

import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { handle } from 'hono/vercel';

import cars from './cars';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  return c.json({ message: 'Internal Server Error' }, 500);
});

app.get('/health-check', (c) => c.json({ message: 'OK' }, 200));

const routes = app.route('/cars', cars);

export const GET = handle(app);

export type AppType = typeof routes;
