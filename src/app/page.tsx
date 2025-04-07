import Image from 'next/image';

import { CarsCarousel } from '@/components/cars-carousel';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className={cn('max-w-screen-xl mx-auto py-8 px-4 sm:px-0', 'space-y-8')}>
      <Image
        src="/volvo-logo.png"
        alt="Volvo"
        width={100}
        height={100}
        className="mx-auto"
      />
      <CarsCarousel />
    </main>
  );
}
