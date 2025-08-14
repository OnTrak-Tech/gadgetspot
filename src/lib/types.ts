export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  condition: 'New' | 'Second-hand';
  stock: number;
  category: string;
  images: string[];
  specs: { [key: string]: string };
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  name: string;
  email: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
}
