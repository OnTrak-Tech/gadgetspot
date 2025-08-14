"use client";

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Truck, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/products');
    }
  }, [cartItems, router]);

  const shippingCost = 10.00;
  const taxes = cartTotal * 0.08;
  const finalTotal = cartTotal + shippingCost + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Order Placed!",
        description: "Thank you for your purchase. A confirmation has been sent to your email.",
    });
    clearCart();
    router.push('/');
  };
  
  if (cartItems.length === 0) {
      return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-10">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><Truck className="w-5 h-5" /> Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Anytown" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" placeholder="12345" required />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><CreditCard className="w-5 h-5" /> Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="space-y-2">
                <Label className="flex items-center gap-3 p-4 border rounded-md has-[input:checked]:border-primary">
                    <RadioGroupItem value="card" id="card" />
                    <span>Credit/Debit Card</span>
                </Label>
                <Label className="flex items-center gap-3 p-4 border rounded-md has-[input:checked]:border-primary">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <span>PayPal</span>
                </Label>
                <Label className="flex items-center gap-3 p-4 border rounded-md has-[input:checked]:border-primary">
                    <RadioGroupItem value="momo" id="momo" />
                    <span>MTN MoMo</span>
                </Label>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <Image src={item.images[0]} alt={item.name} width={40} height={40} className="rounded-md" data-ai-hint="product image" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-4">
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">Place Order</Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}
