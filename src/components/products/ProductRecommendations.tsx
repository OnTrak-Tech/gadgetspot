"use client";

import { useState, useEffect } from 'react';
import { fetchRecommendations } from '@/app/actions';
import type { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ProductRecommendationsProps {
  currentProductId: string;
}

export default function ProductRecommendations({ currentProductId }: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [reasoning, setReasoning] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [browsingHistory, setBrowsingHistory] = useState<string[]>([currentProductId]);

  useEffect(() => {
    // In a real app, browsing history might be persisted in localStorage or a server session.
    // For this example, we just use the current product.
    setBrowsingHistory(prev => Array.from(new Set([currentProductId, ...prev])).slice(0, 5));
  }, [currentProductId]);

  useEffect(() => {
    const getRecs = async () => {
      setIsLoading(true);
      const result = await fetchRecommendations(browsingHistory);
      setRecommendations(result.recommendedProducts);
      setReasoning(result.reasoning);
      setIsLoading(false);
    };

    getRecs();
  }, [browsingHistory]);

  return (
    <div>
      <h2 className="font-headline text-2xl md:text-3xl font-bold">You Might Also Like</h2>
      {reasoning && !isLoading && (
        <Alert className="mt-4 bg-accent/10 border-accent/50">
            <Lightbulb className="h-4 w-4 text-accent" />
            <AlertTitle className="font-headline text-accent/90">Personalized for You</AlertTitle>
            <AlertDescription className="text-accent/80">
                {reasoning}
            </AlertDescription>
        </Alert>
      )}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          : recommendations.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}
