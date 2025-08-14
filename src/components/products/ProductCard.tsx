import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0 relative">
          <Badge
            className={cn(
              "absolute top-2 right-2 z-10",
              product.condition === 'New' ? 'bg-green-600' : 'bg-amber-500'
            )}
            variant="default"
          >
            {product.condition}
          </Badge>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint="product image"
          />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <CardTitle className="font-headline text-lg mt-1 mb-2 leading-tight h-14">
            {product.name}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-muted-foreground">({product.reviewCount})</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <p className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <Button variant="outline" size="sm">View</Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
