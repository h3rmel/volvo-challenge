import { redirect } from 'next/navigation';

export default async function ShopPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) {
    redirect('/');
  }

  redirect(`https://www.volvocars.com/br/build/${id}/`);
}
