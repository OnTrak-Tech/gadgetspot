import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminOrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Orders</CardTitle>
        <CardDescription>A list of all the orders in your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">No orders found.</p>
      </CardContent>
    </Card>
  );
}