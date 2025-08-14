import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, CheckCircle } from 'lucide-react';
import { products, reviews } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import AddToCartButton from '@/components/products/AddToCartButton';
import ProductRecommendations from '@/components/products/ProductRecommendations';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const productReviews = reviews[params.id] || [];

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint="product lifestyle"
              />
            </div>
          </Card>
          {/* Could add thumbnails here */}
        </div>

        <div>
          <Badge
            className={cn(
              "mb-2",
              product.condition === 'New' ? 'bg-green-600' : 'bg-amber-500'
            )}
            variant="default"
          >
            {product.condition}
          </Badge>
          <p className="text-sm text-primary font-semibold">{product.brand}</p>
          <h1 className="font-headline text-3xl md:text-4xl font-bold mt-1">{product.name}</h1>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">({product.reviewCount} reviews)</span>
          </div>

          <p className="text-4xl font-bold text-primary mt-4">${product.price.toFixed(2)}</p>

          <div className="mt-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8">
            <h3 className="font-headline text-xl font-semibold border-b pb-2">Specifications</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <h2 className="font-headline text-2xl md:text-3xl font-bold">Customer Reviews</h2>
        <div className="mt-6 space-y-6">
          {productReviews.length > 0 ? (
            productReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.author} data-ai-hint="person" />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{review.author}</p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-4 w-4",
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground">No reviews yet for this product.</p>
          )}
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <ProductRecommendations currentProductId={product.id} />
      </div>
    </div>
  );
}
