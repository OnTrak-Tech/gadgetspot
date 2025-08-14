// @/components/cart/CartItem.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart, type CartItem as CartItemType } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-start gap-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          className="object-cover"
          data-ai-hint="product image"
        />
      </div>
      <div className="flex-grow">
        <Link href={`/products/${item.id}`} className="font-semibold hover:underline">
          {item.name}
        </Link>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handleQuantityChange(item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 1)}
            className="h-8 w-14 text-center"
            min="1"
          />
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between h-full">
         <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          onClick={() => removeFromCart(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
