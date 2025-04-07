import { redirect } from 'next/navigation';

import { env } from '@/config/env';

export default async function ShopPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) {
    redirect('/');
  }

  redirect(`${env.NEXT_PUBLIC_VOLVO_CARS_URL}/build/${id}/`);
}
