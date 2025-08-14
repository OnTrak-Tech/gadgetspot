"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ProductFiltersProps {
  brands: string[];
  categories: string[];
  maxPrice: number;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedBrands: string[];
  setSelectedBrands: (value: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  selectedCondition: string;
  setSelectedCondition: (value: "all" | "New" | "Second-hand") => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function ProductFilters({
  brands, categories, maxPrice, searchTerm, setSearchTerm, selectedBrands, setSelectedBrands, priceRange, setPriceRange, selectedCondition, setSelectedCondition, selectedCategory, setSelectedCategory, sortBy, setSortBy,
}: ProductFiltersProps) {

  const handleBrandChange = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
  };

  return (
    <div className="space-y-6 sticky top-24">
      <div>
        <Label htmlFor="search" className="font-headline">Search</Label>
        <Input
          id="search"
          placeholder="Search by name or brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2"
        />
      </div>
       <div>
          <Label className="font-headline">Sort By</Label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="date-added">Date Added</SelectItem>
              </SelectContent>
            </Select>
        </div>
      <Accordion type="multiple" defaultValue={['category', 'price', 'brand', 'condition']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="font-headline">Category</AccordionTrigger>
          <AccordionContent>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="font-headline">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4">
             <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
             </div>
            <Slider
              min={0}
              max={maxPrice}
              step={10}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger className="font-headline">Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="condition">
          <AccordionTrigger className="font-headline">Condition</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={selectedCondition} onValueChange={(value) => setSelectedCondition(value as "all" | "New" | "Second-hand")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="cond-all" />
                <Label htmlFor="cond-all" className="font-normal">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="New" id="cond-new" />
                <Label htmlFor="cond-new" className="font-normal">New</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Second-hand" id="cond-used" />
                <Label htmlFor="cond-used" className="font-normal">Second-hand</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
