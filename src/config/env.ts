import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_BASE_URL: z
    .string()
    .url()
    .default('https://volvo-challenge-hermel.vercel.app/'),
  NEXT_PUBLIC_VOLVO_CARS_URL: z.string().url().default('https://www.volvocars.com/br'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  throw new Error('Invalid environment variables.');
}

export const env = _env.data;
