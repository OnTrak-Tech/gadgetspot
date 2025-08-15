import type { Product, Review, User, Order, Customer } from './types';

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Aura Pro Laptop 14"',
    brand: 'Stellar',
    description: "The Aura Pro Laptop combines sleek design with powerful performance. Featuring the latest gen processor, a stunning Retina display, and all-day battery life, it's built to handle anything.",
    price: 1499.99,
    condition: 'New',
    stock: 25,
    category: 'Laptops',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    specs: { 'Processor': 'Next-Gen S2 Chip', 'Memory': '16GB Unified RAM', 'Storage': '512GB SSD', 'Display': '14-inch Liquid Retina XDR' },
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 'prod_002',
    name: 'Galaxy Smartphone Z10',
    brand: 'Orion',
    description: "Experience the future with the Galaxy Z10. Its advanced camera system captures life's moments in stunning detail, and the vibrant AMOLED display brings content to life.",
    price: 899.00,
    condition: 'New',
    stock: 50,
    category: 'Smartphones',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    specs: { 'Display': '6.7-inch Super AMOLED', 'Camera': '108MP Triple Lens', 'Battery': '5000mAh', 'Processor': 'Orion Fusion 5G' },
    rating: 4.6,
    reviewCount: 230,
  },
  {
    id: 'prod_003',
    name: 'SoundWave+ Headphones',
    brand: 'Echo',
    description: "Immerse yourself in pure sound with SoundWave+ headphones. Featuring industry-leading noise cancellation and high-fidelity audio, they're perfect for music lovers and frequent flyers.",
    price: 349.50,
    condition: 'New',
    stock: 78,
    category: 'Audio',
    images: ['https://placehold.co/600x600.png'],
    specs: { 'Type': 'Over-ear', 'Connectivity': 'Bluetooth 5.2', 'Noise Cancellation': 'Adaptive', 'Battery Life': '30 hours' },
    rating: 4.9,
    reviewCount: 451,
  },
  {
    id: 'prod_004',
    name: 'Gamer Pro X Keyboard',
    brand: 'Cyber-Type',
    description: 'Gain a competitive edge with the Gamer Pro X. Mechanical switches provide tactile feedback, while customizable RGB lighting sets the mood for victory.',
    price: 129.99,
    condition: 'Second-hand',
    stock: 12,
    category: 'Peripherals',
    images: ['https://placehold.co/600x600.png'],
    specs: { 'Switch Type': 'Mechanical Brown', 'Backlight': 'Full RGB', 'Connectivity': 'Wired USB-C', 'Layout': 'Full-size' },
    rating: 4.5,
    reviewCount: 88,
  },
  {
    id: 'prod_005',
    name: 'SmartHome Hub 3',
    brand: 'Connectify',
    description: 'Unify your smart devices with the SmartHome Hub 3. Control lights, thermostats, and security cameras with your voice or a single app.',
    price: 99.00,
    condition: 'New',
    stock: 110,
    category: 'Smart Home',
    images: ['https://placehold.co/600x600.png'],
    specs: { 'Compatibility': 'Zigbee, Z-Wave, Wi-Fi', 'Voice Assistant': 'Google Assistant, Alexa', 'Power': 'AC Adapter' },
    rating: 4.3,
    reviewCount: 56,
  },
  {
    id: 'prod_006',
    name: 'ActionCam Go 4K',
    brand: 'Vista',
    description: 'Capture your adventures in stunning 4K. The ActionCam Go is waterproof, durable, and features advanced image stabilization for smooth footage.',
    price: 399.00,
    condition: 'New',
    stock: 42,
    category: 'Cameras',
    images: ['https://placehold.co/600x600.png'],
    specs: { 'Resolution': '4K at 60fps', 'Waterproof': 'Up to 10m', 'Stabilization': 'HyperSmooth 4.0', 'Screen': 'Dual LCD' },
    rating: 4.7,
    reviewCount: 198,
  },
  {
    id: 'prod_007',
    name: 'Aura Pro Laptop 16"',
    brand: 'Stellar',
    description: 'The ultimate professional laptop. The 16" Aura Pro delivers unparalleled performance for developers, designers, and creators.',
    price: 2499.00,
    condition: 'New',
    stock: 15,
    category: 'Laptops',
    images: ['https://placehold.co/600x600.png'],
    specs: { 'Processor': 'Next-Gen S2 Max', 'Memory': '32GB Unified RAM', 'Storage': '1TB SSD', 'Display': '16-inch Liquid Retina XDR' },
    rating: 4.9,
    reviewCount: 98,
  },
  {
    id: 'prod_008',
    name: 'Galaxy Smartphone Z10 Mini',
    brand: 'Orion',
    description: "All the power of the Z10 in a compact form factor. The Z10 Mini is perfect for one-handed use without compromising on features.",
    price: 699.00,
    condition: 'Second-hand',
    stock: 22,
    category: 'Smartphones',
    images: ['https://placehold.co/600x600.png'],
    specs: { 'Display': '6.1-inch Super AMOLED', 'Camera': '64MP Dual Lens', 'Battery': '4200mAh', 'Processor': 'Orion Fusion 5G' },
    rating: 4.4,
    reviewCount: 150,
  },
];

export const reviews: { [productId: string]: Review[] } = {
  'prod_001': [
    { id: 'rev_1', author: 'Jane Doe', avatar: '/avatars/01.png', rating: 5, comment: 'Absolutely love this laptop! The performance is incredible and the screen is gorgeous. Worth every penny.', date: '2 weeks ago' },
    { id: 'rev_2', author: 'John Smith', avatar: '/avatars/02.png', rating: 4, comment: "Great machine, very fast. Battery life is amazing. Wish it had more ports, but a dongle fixes that.", date: '1 month ago' },
  ],
  'prod_002': [
    { id: 'rev_3', author: 'Emily White', avatar: '/avatars/03.png', rating: 5, comment: 'The camera on this phone is out of this world. Photos are so crisp and clear. The screen is also a delight to look at.', date: '3 days ago' },
  ],
};

export const user: User = {
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
};

export const orders: Order[] = [
  {
    id: 'ORD-2024-789123',
    date: '2024-05-15',
    status: 'Delivered',
    total: 1629.98,
    customerName: "Jane Doe",
    items: [
      { productId: 'prod_001', productName: 'Aura Pro Laptop 14"', quantity: 1, price: 1499.99 },
      { productId: 'prod_004', productName: 'Gamer Pro X Keyboard', quantity: 1, price: 129.99 },
    ]
  },
  {
    id: 'ORD-2024-654321',
    date: '2024-04-28',
    status: 'Delivered',
    total: 349.50,
    customerName: "John Smith",
    items: [
      { productId: 'prod_003', productName: 'SoundWave+ Headphones', quantity: 1, price: 349.50 },
    ]
  },
  {
    id: 'ORD-2024-987654',
    date: '2024-05-20',
    status: 'Processing',
    total: 899.00,
    customerName: "Emily White",
    items: [
      { productId: 'prod_002', productName: 'Galaxy Smartphone Z10', quantity: 1, price: 899.00 },
    ]
  }
];

export const customers: Customer[] = [
    { id: 'cust_001', name: 'Jane Doe', email: 'jane.d@example.com', phone: '555-123-4567', registeredDate: '2023-01-15', orderCount: 2, totalSpent: 1800.50, avatar: '/avatars/01.png'},
    { id: 'cust_002', name: 'John Smith', email: 'john.s@example.com', phone: '555-987-6543', registeredDate: '2022-11-30', orderCount: 5, totalSpent: 3250.00, avatar: '/avatars/02.png'},
    { id: 'cust_003', name: 'Emily White', email: 'emily.w@example.com', phone: '555-555-5555', registeredDate: '2023-08-22', orderCount: 1, totalSpent: 899.00, avatar: '/avatars/03.png'},
]

export const allBrands = [...new Set(products.map(p => p.brand))];
export const allCategories = [...new Set(products.map(p => p.category))];
export const maxPrice = Math.max(...products.map(p => p.price));
