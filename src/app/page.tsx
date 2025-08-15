
'use client';

import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { products } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-card py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Carousel 
            className="w-full h-full"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="h-full">
              {products.map((product, index) => (
                <CarouselItem key={index} className="h-full">
                  <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    fill 
                    className="object-cover opacity-10"
                    data-ai-hint="product image"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-primary">
            Welcome to GadgetSpot
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Discover the best deals on the latest gadgets. From brand new to pre-loved, we've got it all.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <FeaturedProducts />
    </div>
  );
}
