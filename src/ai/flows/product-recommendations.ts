'use server';

/**
 * @fileOverview Provides product recommendations based on user browsing history.
 *
 * - getProductRecommendations - A function that returns product recommendations for a user.
 * - ProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  browsingHistory: z.array(z.string()).describe('An array of product IDs representing the user\'s browsing history.'),
});
export type ProductRecommendationsInput = z.infer<typeof ProductRecommendationsInputSchema>;

const ProductRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('An array of product IDs representing the recommended products.'),
  reasoning: z.string().describe('The reasoning behind the recommendations.'),
});
export type ProductRecommendationsOutput = z.infer<typeof ProductRecommendationsOutputSchema>;

export async function getProductRecommendations(input: ProductRecommendationsInput): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert e-commerce product recommendation engine. Given a user's browsing history, you will recommend relevant products that the user might be interested in purchasing.

Browsing History: {{#each browsingHistory}}{{{this}}}, {{/each}}

Based on the browsing history, recommend a list of product IDs and explain your reasoning for the recommendations. Only return products which are relevant, and don't make assumptions about the user's interests. If the user has no browsing history, recommend some of the most popular products instead.`, // added default case.
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
