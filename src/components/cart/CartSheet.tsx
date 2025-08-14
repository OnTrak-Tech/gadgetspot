"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import CartItem from "./CartItem";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartSheet({ children }: { children: React.ReactNode }) {
  const { cartItems, cartTotal, itemCount } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline">Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-4 -mr-6">
              <div className="flex flex-col gap-4 py-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto border-t pt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
             <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="font-headline text-xl font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground mt-2">Looks like you haven't added anything yet.</p>
             <SheetTrigger asChild>
                <Button asChild variant="outline" className="mt-4">
                    <Link href="/products">Continue Shopping</Link>
                </Button>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
