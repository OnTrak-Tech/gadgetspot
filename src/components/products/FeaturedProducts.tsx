import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">
          Featured Products
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-center text-muted-foreground">
          Check out our hand-picked selection of the best gadgets available right now.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
