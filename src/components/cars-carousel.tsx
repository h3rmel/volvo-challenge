'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { cn } from '@/lib/utils';

import { useGetCars } from '@/hooks/use-get-cars';
import { BodyType } from '@/types/car';

const BODY_TYPES: BodyType[] = ['suv', 'estate', 'sedan'];

export function CarsCarousel() {
  const [selectedBodyType, setSelectedBodyType] = useState<BodyType | 'all'>('all');
  const carsQuery = useGetCars();

  const cars = carsQuery.data ?? [];
  const filteredCars =
    selectedBodyType === 'all'
      ? cars
      : cars.filter((car) => car.bodyType === selectedBodyType);

  return (
    <>
      <Select
        value={selectedBodyType}
        onValueChange={(value: BodyType | 'all') => setSelectedBodyType(value)}
      >
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder="Filter by body type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Body Types</SelectItem>
          {BODY_TYPES.map((type) => (
            <SelectItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="relative">
        <div className="absolute -left-3 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />
        <Carousel className={cn('w-full h-fit')} opts={{ align: 'center' }}>
          <CarouselContent>
            {filteredCars.map((car) => (
              <CarouselItem
                key={car.id}
                className={cn('lg:basis-1/4 md:basis-1/3 basis-[80%]')}
              >
                <Card>
                  <CardHeader>
                    <CardDescription className="font-bold text-base tracking-wide text-foreground/50">
                      {car.bodyType}
                    </CardDescription>
                    <CardTitle
                      className={cn(
                        'text-xl font-semibold',
                        'inline-flex items-center gap-2',
                      )}
                    >
                      {car.modelName}{' '}
                      <span className={cn('font-normal text-gray-500')}>
                        {car.modelType}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={car.imageUrl}
                      alt={car.modelName}
                      width={300}
                      height={300}
                    />
                  </CardContent>
                  <CardFooter className="gap-4 justify-center">
                    <Link
                      href={`/learn/${car.id}`}
                      className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }))}
                    >
                      Learn
                      <ChevronRight className="size-4" />
                    </Link>
                    <Link
                      href={`/shop/${car.id}`}
                      className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }))}
                    >
                      Shop
                      <ChevronRight className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:flex items-center float-right gap-4 mt-4">
            <CarouselPrevious size="iconLg" />
            <CarouselNext size="iconLg" />
          </div>
          <div className="flex lg:hidden justify-center mt-4">
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </>
  );
}
