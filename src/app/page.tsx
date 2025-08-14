import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
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
