import { redirect } from 'next/navigation';

export default function ShopPage({ searchParams }: { searchParams: { id?: string } }) {
  const carId = searchParams.id;

  if (!carId) {
    redirect('/');
  }

  redirect(`https://www.volvocars.com/br/BUILD/${carId}/`);
}
