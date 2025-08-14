import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { user, orders } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">My Account</h1>
      <p className="text-muted-foreground mb-8">Welcome back, {user.name}!</p>
      
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="profile">Profile Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Your Orders</CardTitle>
              <CardDescription>View the history of your past purchases.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {orders.map(order => (
                <div key={order.id} className="border p-4 rounded-lg">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold">Order #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
                        <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className={order.status === 'Delivered' ? 'bg-green-600' : ''}>{order.status}</Badge>
                    </div>
                  </div>
                  <Separator />
                  <div className="mt-4 space-y-2">
                    {order.items.map(item => (
                        <div key={item.productId} className="flex justify-between items-center text-sm">
                            <p>{item.productName} (x{item.quantity})</p>
                            <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Profile Information</CardTitle>
              <CardDescription>Update your account details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={user.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input id="password" type="password" />
              </div>
               <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
