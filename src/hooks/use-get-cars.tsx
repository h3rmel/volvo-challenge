import { useQuery } from '@tanstack/react-query';

import { client } from '@/lib/hono';

export function useGetCars() {
  const query = useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      const response = await client.api.cars.$get();

      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }

      return response.json();
    },
  });

  return query;
}
