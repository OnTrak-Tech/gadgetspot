import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminProductsPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-headline">Products</CardTitle>
            <CardDescription>Manage your products and view their sales performance.</CardDescription>
          </div>
          <Button asChild>
            <Link href="/admin/products/new">
              <PlusCircle className="h-4 w-4 mr-2" /> Add Product
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">No products found.</p>
      </CardContent>
    </Card>
  );
}