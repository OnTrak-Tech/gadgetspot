import { products, allBrands, allCategories, maxPrice } from "@/lib/data";
import ProductList from "@/components/products/ProductList";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Products</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          Browse our extensive collection of new and second-hand gadgets. Use the filters to find exactly what you're looking for.
        </p>
      </div>
      <ProductList 
        products={products} 
        brands={allBrands} 
        categories={allCategories} 
        maxPrice={maxPrice} 
      />
    </div>
  );
}
