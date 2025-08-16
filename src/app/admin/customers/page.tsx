import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminCustomersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Customers</CardTitle>
        <CardDescription>
          View and manage your customers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">No customers found.</p>
      </CardContent>
    </Card>
  );
}