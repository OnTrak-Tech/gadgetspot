"use client";

import { useState, useMemo } from "react";
import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

interface ProductListProps {
  products: Product[];
  brands: string[];
  categories: string[];
  maxPrice: number;
}

export default function ProductList({ products, brands, categories, maxPrice }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [selectedCondition, setSelectedCondition] = useState<"all" | "New" | "Second-hand">("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCondition = selectedCondition === "all" || product.condition === selectedCondition;
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesBrand && matchesPrice && matchesCondition && matchesCategory;
    });

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "date-added": // Assuming higher stock/ID means newer
        filtered.sort((a, b) => b.stock - a.stock);
        break;
      case "popularity":
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [products, searchTerm, selectedBrands, priceRange, selectedCondition, selectedCategory, sortBy]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <ProductFilters
          brands={brands}
          categories={categories}
          maxPrice={maxPrice}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedCondition={selectedCondition}
          setSelectedCondition={setSelectedCondition}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </aside>
      <main className="lg:col-span-3">
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-card rounded-lg p-12 text-center">
            <h3 className="font-headline text-2xl font-semibold">No Products Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </main>
    </div>
  );
}
