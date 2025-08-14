"use server";

import { getProductRecommendations } from "@/ai/flows/product-recommendations";
import { products } from "@/lib/data";

export async function fetchRecommendations(browsingHistory: string[]): Promise<{ recommendedProducts: any[], reasoning: string }> {
  try {
    const result = await getProductRecommendations({ browsingHistory });
    const recommendedProducts = products.filter(p => result.recommendations.includes(p.id));
    
    // Fallback if AI returns too few products
    if (recommendedProducts.length < 4) {
      const popularFallback = products
        .filter(p => !result.recommendations.includes(p.id) && !browsingHistory.includes(p.id))
        .sort((a, b) => b.reviewCount - a.reviewCount)
        .slice(0, 4 - recommendedProducts.length);
      recommendedProducts.push(...popularFallback);
    }
    
    return {
      recommendedProducts: recommendedProducts.slice(0, 4), // Ensure we only return 4
      reasoning: result.reasoning
    };
  } catch (error) {
    console.error("Error fetching AI recommendations:", error);
    // Return a default set of popular products on error
    const popularProducts = products.sort((a,b) => b.reviewCount - a.reviewCount).slice(0,4);
    return {
        recommendedProducts: popularProducts,
        reasoning: "We're having trouble getting personalized recommendations, but here are some of our most popular items!"
    };
  }
}
