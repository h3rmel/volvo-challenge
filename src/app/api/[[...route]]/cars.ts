import { Hono } from 'hono';

import { env } from '@/config/env';
import { Car } from '@/types/car';

const app = new Hono().get('/', async (c) => {
  try {
    const response = await fetch(new URL('/api/cars.json', env.NEXT_PUBLIC_BASE_URL));
    const cars: Car[] = await response.json();

    return c.json(cars, 200);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to fetch cars data' }, 500);
  }
});

export default app;
